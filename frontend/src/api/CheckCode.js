import axios from "axios"; // Importing Axios
import dotenv from "dotenv"; // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file

// Set up your JDoodle credentials
const JDoodleAPI = "https://api.jdoodle.com/v1/execute"; // JDoodle API endpoint
const clientId = process.env.YOUR_CLIENT_ID; // JDoodle client ID from environment variable
const clientSecret = process.env.YOUR_CLIENT_SECRET; // JDoodle client secret from environment variable

// Function to check code execution
const checkCodeExecution = async (code, language) => {
  const payload = {
    script: code,
    language: language,
    versionIndex: "0",
    stdin: stdin || "", // Input data if needed for the problem
    clientId: clientId,
    clientSecret: clientSecret,
  };

  try {
    const response = await axios.post(JDoodleAPI, payload);
    const { output, statusCode } = response.data;

    // Compare output with expected output
    if (statusCode === 200) {
      console.log('first')
    } else {
      return { success: false, message: "Error executing code." };
    }
  } catch (error) {
    console.error("Error executing code:", error);
    return { success: false, message: "Internal server error." };
  }
};

// Export the function
export default checkCodeExecution;
