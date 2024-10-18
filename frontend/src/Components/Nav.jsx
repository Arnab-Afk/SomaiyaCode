import React from "react";
import Select from "react-select";
import "./Nav.css"; // Change to Nav.css if the file is renamed

const Nav = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  return (
    <div className="bg-red-600 rounded-t-md flex flex-row justify-between items-center p-3">
      <h1 className="text-2xl text-white font-[helvetica]">
        Somaiya Code Compiler
      </h1>
      <div className="flex flex-row gap-4">
        <Select
          options={languages}
          value={userLang}
          onChange={(e) => setUserLang(e.value)}
          placeholder={userLang}
          className="text-black outline-none"
        />
        {/* <Select
          options={themes}
          value={userTheme}
          onChange={(e) => setUserTheme(e.value)}
          placeholder={userTheme}
          className="text-black outline-none "
        /> */}
      </div>
    </div>
  );
};

export default Nav; // Updated to export Nav
