import { useState } from "react";
import Editor from "@monaco-editor/react";
import Axios from "axios";
// import spinner from "./spinner.svg";
import Nav from "./Nav";
function CodeEditor() {
  // State variable to set users source code
  const [userCode, setUserCode] = useState(`function twoSum(nums, target) {
        const numMap = {};
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complement in numMap) {
                return [numMap[complement], i];
            }
            numMap[nums[i]] = i;
        }
        return [];
    }`);

  // State variable to set editors default language
  const [userLang, setUserLang] = useState("python");

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-light");

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  // State variable to set users input
  const [userInput, setUserInput] = useState("");

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  // Function to call the compile endpoint
  function compile() {
    // setLoading(true);
    if (userCode === ``) {
      return;
    }

    // Post request to compile endpoint
    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      // input: userInput,
    })

      .then((res) => {
        setUserOutput(res.data.stdout || res.data.stderr);
      })
      // .then(() => {
      //   setLoading(false);
      // })
      .catch((err) => {
        console.error(err);
        setUserOutput(
          "Error: " + (err.response ? err.response.data.error : err.message)
        );
        // setLoading(false);
      });
  }
  // const checkCode = async () => {
  //   if (userCode === ``) {
  //     return;
  //   }

  //   try {
  //     const res = await Axios.post(`http://localhost:8000/api/check-code`, {
  //       code: userCode,
  //       language: userLang,
  //       // stdin: userInput,
  //     });
  //     console.log(res);
  //     // setUserOutput(
  //     //   (prevOutput) => `${prevOutput}\nCheck Code Result: ${res.data.message}`
  //     // );
  //   } catch (err) {
  //     console.error(err);
  //     // setUserOutput(
  //     //   "Error: " + (err.response ? err.response.data.error : err.message)
  //     // );
  //   }
  // };

  const callApi = () => {
    compile(); // First compile the code
    // await checkCode(); // Then check the code
  };

  // Function to clear the output screen
  function clearOutput() {
    setUserOutput("");
  }

  return (
    <div className="">
      <Nav
        userLang={userLang}
        setUserLang={setUserLang}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        // fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <div className="main">
        <div className="left-container bg-white">
          <div className="flex flex-col items-center">
            <button
              className="p-1 pl-4 pr-4 m-2 font-medium  bg-black/10 text-black"
              onClick={() => callApi()}
            >
              Run
            </button>
          </div>
          <Editor
            options={options}
            height="calc(50vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
        </div>
        <div className="right-container">
          {/* <h4>Input:</h4>
          <div className="input-box">
            <textarea
              id="code-inp"
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
          </div> */}
          <div className="flex flex-col p-2 bg-white text-black">
            <h4 className="text-2xl">Output:</h4>

            <div className="bg-black/10 p-2">
              <pre>{userOutput}</pre>
              <div className="flex flex-row-reverse">
                <button
                  onClick={() => {
                    clearOutput();
                  }}
                  className="p-1 pl-4  pr-4 font-medium  bg-black/10 text-black"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
