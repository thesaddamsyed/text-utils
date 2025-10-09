import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const clickUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const clickLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clickTitleCase = () => {
    const newText = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Title Case", "success");
  };
  const clickClear = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const clickCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text has been copied", "success");
  };

  const clickRemoveSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const clickDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "textutils-output.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    props.showAlert("Downloaded as text file", "success");
  };

  //count words funciton
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div
        className="container container-narrow section"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="heading-xl mb-3">{props.heading}</h1>
        <div className="card-modern p-3 mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#111827",
              color: props.mode === "light" ? "black" : "white",
              border: `1px solid ${
                props.mode === "light"
                  ? "rgba(15, 23, 42, 0.2)"
                  : "rgba(148,163,184,0.3)"
              }`,
              minHeight: "160px",
            }}
            onChange={handleChange}
            id="myBox"
            rows="6"
            placeholder="Start typing or paste your text here..."
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <button
            className="btn btn-primary-modern mx-1 my-1"
            style={{ backgroundColor: props.btnColor || undefined }}
            onClick={clickUpperCase}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary-modern mx-1 my-1"
            style={{ backgroundColor: props.btnColor || undefined }}
            onClick={clickLowerCase}
          >
            Lowercase
          </button>
          <button
            className="btn btn-primary-modern mx-1 my-1"
            style={{ backgroundColor: props.btnColor || undefined }}
            onClick={clickTitleCase}
          >
            Title Case
          </button>
          <button
            className="btn btn-primary-modern mx-1 my-1"
            style={{ backgroundColor: props.btnColor || undefined }}
            onClick={clickCopy}
          >
            Copy
          </button>
          <button
            className="btn btn-outline-secondary mx-1 my-1"
            onClick={clickRemoveSpaces}
          >
            Remove Spaces
          </button>
          <button
            className="btn btn-outline-secondary mx-1 my-1"
            onClick={clickClear}
          >
            Clear
          </button>
          <button
            className="btn btn-outline-secondary mx-1 my-1"
            onClick={clickDownload}
          >
            Download .txt
          </button>
        </div>
      </div>
      <div
        className="container container-narrow my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="h4 mb-3">Your text summary</h2>
        <div className="card-modern p-3 mb-3">
          <div className="stat">{countWords(text)} words</div>
          <div className="stat">{text.length} characters</div>
          <div className="stat">
            {(0.008 * countWords(text)).toFixed(2)} min read
          </div>
        </div>
        <h2 className="h5 mb-2">Preview</h2>
        <div className="card-modern p-3">
          <p className="mb-0 muted">
            {text.length ? text : "Nothing to preview yet."}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
