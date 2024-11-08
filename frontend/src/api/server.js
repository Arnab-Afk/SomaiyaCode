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
import fetch , { Headers } from "node-fetch"




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

global.fetch = fetch
global.Headers = Headers;


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

const genAI = new GoogleGenerativeAI("AIzaSyAp3GK3xZNMzU3mgAw1HDlAfmkhwv0LlH0");
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

    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri,
        },
      },
      { text: `Job Description: ${jobDescription}` },
      { text: " To perform a comprehensive ATS (Applicant Tracking System) analysis of the user’s resume based on the provided job description, evaluate the percentage of relevant keywords, skills, and experiences that match the job requirements. Statistically compare the alignment of the user's qualifications with the key responsibilities, noting exact keyword matches, gaps, and redundancies. Offer feedback on each resume section (Summary, Skills, Experience, Education), highlighting areas to improve by adding or removing content. Provide a score based on keyword density and alignment, and give a final verdict on the user’s readiness for the job, including percentage improvements after suggested changes." },
    ]);

    const generatedText = result.response.text();

    fs.unlink(path.join(__dirname, "uploads", resumeFile.filename), (err) => {
      if (err) {
        console.error("Error deleting the uploaded file:", err);
      } else {
        console.log("Uploaded resume file deleted successfully.");
      }
    });

    res.json({ summary: generatedText });
  } catch (error) {
    console.error("Error in /check-resume:", error);
    res.status(500).json({ error: "An error occurred while processing the resume." });
  }
});

function pathExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}









//======================= Ai interview ===============================
const model = genAI.getGenerativeModel({
model: "gemini-1.5-flash",
generationConfig: {
  candidateCount: 1,
  stopSequences: ["x"],
  maxOutputTokens: 150, // Adjusted for longer responses
  temperature: 0.7, // Adjust the creativity level as needed
},
});



const initialInterview = {
role: 'model',
content: `
  You are a gender-neutral interviewer. You are interviewing a candidate for a software engineering position. You can ask questions about their skills and experience.
  Ask one question at a time and wait for the interviewee to answer before asking the next question.
  You can also ask the interviewee to elaborate on their answers.
  You can ask the interviewee to describe a project they have worked on in the past.
  You can ask the interviewee about some coding questions to check their logic-building skills.
  Do not ask all questions at once and make it sequential. Include roles in the output.
`,
};

let messageInterview = {};
let ats = {};

app.post('/interview/start', async (req, res) => {
const id = req.body.id;
let messages = [];

messageInterview[id] = [
  initialInterview,
  {
    role: 'user',
    content: "Interviewee's resume" + JSON.stringify(ats),
  },
  {
    role: 'model',
    content: 'Start the interview by asking the interviewee to introduce themselves',
  },
];

messages = messageInterview[id];

try {
  const request = {
    contents: messages.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    })),
  };

  const result = await model.generateContentStream(request);

  console.log(result.response.text()); // If the response is not in a stream, this should still work
  res.json(result);



  let responseText = '';
  for await (const item of result.stream) {
    responseText += item.candidates[0].content.parts[0].text;
  }

  messages.push({ role: 'model', content: responseText });
  res.json(responseText);
} catch (error) {
  console.error('Error in starting the interview:', error);
  res.status(500).json({ error: 'Failed to start the interview' });
}
});

app.post('/interview/answer', async (req, res) => {
const msg = req.body.message;
const id = req.body.id;
const prePrompt = '';
const fullPrompt = prePrompt + msg;
let prompt = {
  role: 'user',
  content: fullPrompt,
};

let messages = [];
try {
  messages = messageInterview[id];
  messages.push(prompt);
} catch (e) {
  return res.json('Interview not started');
}

try {
  const request = {
    contents: messages.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    })),
  };

  const result = await model.generateContentStream(request);

  let responseText = '';
  for await (const item of result.stream) {
    responseText += item.candidates[0].content.parts[0].text;
  }

  messages.push({ role: 'model', content: responseText });
  res.json(responseText);
} catch (error) {
  console.error('Error in processing the interview answer:', error);
  res.status(500).json({ error: 'Failed to process the answer' });
}
});




















app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});