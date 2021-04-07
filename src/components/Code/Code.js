import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import s from "./Code.module.scss";

const Code = ({ children }) => {
  return (
    <div className={s.codeContainer}>
      <SyntaxHighlighter
        className=""
        language="javascript"
        style={docco}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
