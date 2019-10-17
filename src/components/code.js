import React, { useEffect } from "react";
import Prism from "prismjs";

const Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={`language-${language} code`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default Code;
