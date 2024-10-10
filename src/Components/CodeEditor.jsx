// CodeEditor.jsx
import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  const [editorContent, setEditorContent] = useState("// Your code here...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const runCode = async () => {
    try {
      const response = await fetch("http://localhost:5001/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: editorContent,
          language: "javascript", // Set the language accordingly
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.output); // Set the output to display
        setError(""); // Clear previous errors
      } else {
        setOutput("");
        setError(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("");
      setError("An error occurred while executing the code.");
    }
  };

  return (
    <div
      className="editor-container bg-white shadow-sm rounded-lg"
      style={{ width: "600px" }}
    >
      <div
        className="editor-header"
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ padding: "5px", borderRadius: "4px" }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="C++">C++</option>
          <option value="C">C</option>

          {/* Add more languages as needed */}
        </select>
        <button
          onClick={runCode} // Call runCode on click
          style={{
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Run
        </button>
      </div>

      <MonacoEditor
        height="500px"
        defaultLanguage={language}
        defaultValue={editorContent}
        onChange={handleEditorChange}
        options={{
          selectOnLineNumbers: true,
          automaticLayout: true,
        }}
      />

      {/* Display output and error messages */}
      <div
        className="editor-output"
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          background: "#f9f9f9",
        }}
      >
        <h3>Output:</h3>
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          {output}
        </pre>
        {error && (
          <>
            <h3 style={{ color: "red" }}>Error:</h3>
            <pre
              style={{
                color: "red",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {error}
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
