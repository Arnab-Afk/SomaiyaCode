import React, { useState } from "react";
import Axios from "axios";

const CodeAnalyzer = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python"); // Default to Python
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await Axios.post("http://localhost:8000/compile", {
        code,
        language,
        input,
      });
      setOutput(response.data); // Set the response data
    } catch (err) {
      console.error(err);
      setError("An error occurred while compiling the code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Code Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here"
          rows={10}
          cols={50}
          required
        />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          {/* Add more languages as needed */}
        </select>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input for the code (if any)"
          rows={5}
          cols={50}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Code"}
        </button>
      </form>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {output && (
        <div>
          <h2>Execution Output</h2>
          <pre>{JSON.stringify(output.run, null, 2)}</pre>{" "}
          {/* Display run output */}
          <h2>Analysis Results</h2>
          {output.analysis && (
            <div>
              <h3>Python Analysis</h3>
              <pre>{output.analysis.pythonAnalysis.rawOutput.join("\n")}</pre>
              <h4>Summary:</h4>
              <div>
                <p>Score: {output.analysis.pythonAnalysis.summary.score}</p>
                <p>
                  Errors: {output.analysis.pythonAnalysis.summary.issues.errors}
                </p>
                <p>
                  Warnings:{" "}
                  {output.analysis.pythonAnalysis.summary.issues.warnings}
                </p>
                <p>
                  Conventions:{" "}
                  {output.analysis.pythonAnalysis.summary.issues.conventions}
                </p>
                <h5>Recommendations:</h5>
                <ul>
                  {output.analysis.pythonAnalysis.summary.recommendations.map(
                    (rec, index) => (
                      <li key={index}>{rec}</li>
                    )
                  )}
                </ul>
              </div>

              <h3>C++ Analysis</h3>
              <pre>{output.analysis.cppAnalysis.rawOutput.join("\n")}</pre>
              <h4>Summary:</h4>
              <div>
                <p>
                  Errors: {output.analysis.cppAnalysis.summary.issues.errors}
                </p>
                <p>
                  Style Warnings:{" "}
                  {output.analysis.cppAnalysis.summary.issues.styleWarnings}
                </p>
                <h5>Recommendations:</h5>
                <ul>
                  {output.analysis.cppAnalysis.summary.recommendations.map(
                    (rec, index) => (
                      <li key={index}>{rec}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeAnalyzer;
