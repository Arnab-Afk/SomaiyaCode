// import express from "express";
// import cors from "cors";
// import Axios from "axios";

// const app = express();
// const PORT = 8000;

// app.use(cors());
// app.use(express.json());
// app.post("/compile", (req, res) => {
//   // getting the required data from the request
//   let code = req.body.code;
//   let language = req.body.language;
//   let input = req.body.input;

//   let languageMap = {
//     c: { language: "c", version: "10.2.0" },
//     cpp: { language: "c++", version: "10.2.0" },
//     python: { language: "python", version: "3.10.0" },
//     java: { language: "java", version: "15.0.2" },
//   };

//   if (!languageMap[language]) {
//     return res.status(400).send({ error: "Unsupported language" });
//   }

//   let data = {
//     language: languageMap[language].language,
//     version: languageMap[language].version,
//     files: [
//       {
//         name: "main",
//         content: code,
//       },
//     ],
//     stdin: input,
//   };

//   let config = {
//     method: "post",
//     url: "https://emkc.org/api/v2/piston/execute",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   // calling the code compilation API
//   Axios(config)
//     .then((response) => {
//       res.json(response.data.run); // Send the run object directly
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).send({ error: "Something went wrong" });
//     });
// });

// // Start the server
// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import Axios from "axios";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Define a route to compile and run code
app.post("/compile", async (req, res) => {
  // Getting the required data from the request
  const code = req.body.code;
  const language = req.body.language;
  const input = req.body.input;

  const languageMap = {
    c: 50, // C language ID in Judge0
    cpp: 54, // C++ language ID in Judge0
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
    console.log(resultResponse);
    // Step 4: Send the result back to the client
    res.json(resultResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

// Start the server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
