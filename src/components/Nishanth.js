import React, { useState } from "react";

export default function Nishanth(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!!","primary")
  };
  const handleLoClick = () => {
    console.log("lowercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!!", "light");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Successfully!!", "info");
  };
  const handlesubstrClick = () => {
    console.log("Clear text was clicked" + text);
    let newtext = text.substring(0, 4);
    setText(newtext);
    props.showAlert("Converted to Substring!!", "warning");
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Remove ExtraSpace Successfully", "success");
  };

  // const handleSeClick = ()=>{
  //     console.log("Sentencecase was clicked" + text);
  //     let newText = text.toLocaleUpperCase();
  //     setText(newText)

  // }
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared Text!!", "danger");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "darkgrey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="5"
          ></textarea>{" "}
          {/* onChange is used to change the text */}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Covert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        {/* <button className="btn btn-warning mx-3 " onClick={handleSeClick}>Sentence text</button> */}
        <button className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          onClick={handlesubstrClick}
        >
          Convert to Sub-string
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove extra Space
        </button>
        <button
          className="btn btn-danger mx-1 my-1 "
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "darkgrey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it"}</p>
      </div>
    </>
  );
}
