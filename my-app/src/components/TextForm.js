import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Please type...");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    text
      ? props.showAlert("Converted to upper case", "success")
      : props.showAlert("Text area is empty!", "danger");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    text
      ? props.showAlert("Converted to lower case", "success")
      : props.showAlert("Text area is empty!", "danger");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    {
      text
        ? props.showAlert("Text copied successfully", "success")
        : props.showAlert("Text area is empty!", "danger");
    }
  };

  const clearText = () => {
    setText("");
    text
      ? props.showAlert("Text cleared successfully", "success")
      : props.showAlert("Text area is empty!", "danger");
  };

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={`"form-label" text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Enter your text here:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleText}
          style={{
            backgroundColor: props.mode === "dark" ? "#E8E8E8" : "white",
            // color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button
        className="btn btn-primary mr-2"
        type="submit"
        onClick={handleUpperCase}
      >
        To Upper Case
      </button>
      <button
        className="btn btn-primary mr-2"
        type="submit"
        onClick={handleLowerCase}
      >
        To Lower Case
      </button>
      <button
        className="btn btn-primary mr-2"
        type="submit"
        onClick={clearText}
      >
        Clear Text
      </button>
      <button className="btn btn-danger mr-2" type="submit" onClick={copyText}>
        Copy Text
      </button>
    </div>
  );
}
