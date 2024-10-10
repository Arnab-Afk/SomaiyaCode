import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { exec } from "child_process";
import fs from "fs"; // To handle temporary file creation

const app = express();
const PORT = process.env.PORT || 5001; // Change to 5001 or another port

app.use(cors());
app.use(bodyParser.json());

app.post("/execute", (req, res) => {
  const { code, language } = req.body;
  console.log("API has been hit");

  // Create a temporary file to hold the code
  const tempFile = `temp.${
    language === "javascript"
      ? "js"
      : language === "python"
      ? "py"
      : language === "C++"
      ? "cpp"
      : "c"
  }`;

  // Write the code to the temporary file
  fs.writeFile(tempFile, code, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to write code to file." });
    }

    // Define the command to execute based on the language
    let command;
    if (language === "javascript") {
      command = `node ${tempFile}`;
    } else if (language === "python") {
      command = `python3 ${tempFile}`;
    } else if (language === "C++") {
      command = `g++ ${tempFile} -o temp && ./temp`; // Compile and run
    } else if (language === "C") {
      command = `gcc ${tempFile} -o temp && ./temp`; // Compile and run
    } else {
      return res.status(400).json({ error: "Unsupported language" });
    }

    // Execute the command
    exec(command, (error, stdout, stderr) => {
      // Clean up the temporary files after execution
      fs.unlink(tempFile, (err) => {
        if (err) console.error("Failed to delete temp file:", err);
      });
      if (language === "C++" || language === "C") {
        fs.unlink("temp", (err) => {
          if (err) console.error("Failed to delete temp executable:", err);
        });
      }

      if (error) {
        return res.status(400).json({ error: stderr || "Execution error." });
      }
      res.json({ output: stdout });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
