import React, { useState } from "react";
import "./App.css";
import { Display } from "./Display";
import { Editor } from "./Editor";

function App() {
  const [markdown, updateMarkdown] = useState("");

  return (
    <main id="container">
      <div className="editor">
        <Editor
          Value=""
          OnChange={(newValue: string) => updateMarkdown(newValue)}
        />
      </div>
      <div className="preview">
        <Display Markdown={markdown} />
      </div>
    </main>
  );
}

export default App;
