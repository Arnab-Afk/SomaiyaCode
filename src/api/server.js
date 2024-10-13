  // server.js
  import express from "express";
  import cors from "cors";
  import Axios from "axios";
  import multer from "multer";
  import path from "path";
  import { fileURLToPath } from 'url';
  import { GoogleGenerativeAI } from "@google/generative-ai";
  import { GoogleAIFileManager } from "@google/generative-ai/server";
  import dotenv from "dotenv";
  import fs from "fs";

  // Initialize environment variables
  dotenv.config();

  // For handling __dirname in ES modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const app = express();
  const PORT = 8000;

  // Middleware
  app.use(cors());
  app.use(express.json());

  // ==================== Existing /compile Route ==================== //

  app.post("/compile", async (req, res) => {
    // Getting the required data from the request
    const code = req.body.code;
    const language = req.body.language;
    const input = req.body.input;

    const languageMap = {
      c: 50,    // C language ID in Judge0
      cpp: 54,  // C++ language ID in Judge0
      python: 71, // Python language ID in Judge0
      java: 62, // Java language ID in Judge0
    };

    const languageId = languageMap[language];
    if (!languageId) {
      return res.status(400).send({ error: "Unsupported language" });
    }

    // Step 1: Submit the code to Judge0 for compilation and execution
    const submissionData = {
      source_code: code,
      language_id: languageId,
      stdin: input,
    };

    try {
      // Step 2: Create a new submission
      const submissionResponse = await Axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions",
        submissionData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key":
              "0e24e82e41mshc420d8b30e508fdp1a06fajsn83107ccfdf02", // Replace with your actual RapidAPI key
          },
        }
      );

      // Get the submission ID
      const submissionId = submissionResponse.data.token;

      // Step 3: Poll for the result of the submission
      const resultResponse = await Axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}`,
        {
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key":
              "0e24e82e41mshc420d8b30e508fdp1a06fajsn83107ccfdf02", // Replace with your actual RapidAPI key
          },
        }
      );

      console.log(resultResponse.data);

      // Step 4: Send the result back to the client
      res.json(resultResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Something went wrong" });
    }
  });

  // ==================== New /check-resume Route ==================== //

  // Configure multer for file uploads
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(__dirname, "uploads");
      // Create the uploads directory if it doesn't exist
      if (!pathExists(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      // Use a timestamp and original filename to prevent naming conflicts
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });

  // File type validation
  const fileFilter = (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, and DOCX files are allowed!"));
    }
  };

  const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: fileFilter,
  });

  // Initialize Google Generative AI with your API_KEY.
  const genAI = new GoogleGenerativeAI("AIzaSyAp3GK3xZNMzU3mgAw1HDlAfmkhwv0LlH0");
  // Initialize GoogleAIFileManager with your API_KEY.
  const fileManager = new GoogleAIFileManager("AIzaSyAp3GK3xZNMzU3mgAw1HDlAfmkhwv0LlH0");

  // POST /check-resume
  app.post("/check-resume", upload.single("resume"), async (req, res) => {
    try {
      const { jobDescription } = req.body;
      const resumeFile = req.file;

      if (!resumeFile || !jobDescription) {
        return res
          .status(400)
          .json({ error: "Resume file and job description are required." });
      }

      // Upload the resume file to Google AI File Manager
      const uploadResponse = await fileManager.uploadFile(
        path.join(__dirname, "uploads", resumeFile.filename),
        {
          mimeType: resumeFile.mimetype,
          displayName: resumeFile.originalname,
        }
      );

      console.log(
        `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`
      );

      // Initialize the Gemini model
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      // Generate content using the uploaded file and job description
      const result = await model.generateContent([
        {
          fileData: {
            mimeType: uploadResponse.file.mimeType,
            fileUri: uploadResponse.file.uri,
          },
        },
        // { text: "Can you summarize this document as a bulleted list?" },
        { text: `Job Description: ${jobDescription}` },
        { text: " The user will upload their resume, along with the job description for the position they are applying for. Your task is to perform an ATS (Applicant Tracking System) analysis to evaluate how well the user fits the job. Provide detailed feedback, including section-wise recommendations for changes—what to add and what to remove. Additionally, assign a score based on the job description and offer constructive feedback. Finally, give a definitive verdict on whether the user is ready for the job or not." },
      ]);

      // Extract the generated text
      const generatedText = result.response.text();

      // Optionally, delete the uploaded file after processing
      fs.unlink(path.join(__dirname, "uploads", resumeFile.filename), (err) => {
        if (err) {
          console.error("Error deleting the uploaded file:", err);
        } else {
          console.log("Uploaded resume file deleted successfully.");
        }
      });

      // Send the AI-generated result back to the client
      res.json({ summary: generatedText });
    } catch (error) {
      console.error("Error in /check-resume:", error);
      res.status(500).json({ error: "An error occurred while processing the resume." });
    }
  });

  // Helper function to check if a path exists
  function pathExists(p) {
    try {
      fs.accessSync(p, fs.constants.F_OK);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Start the server
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
