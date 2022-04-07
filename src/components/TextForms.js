import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  // let word = text.replace(" ", "").split(" ").length;

  // if (text === "") {
  //   word = "0";
  // }

  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.showAlert("UpperCase", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("Onchange");
  };

  const handleCopy = () =>{
    let text = document.getElementById("MyBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success")
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#141212" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} disabled={text.length===0 ? true : false} className="btn btn-primary mx-1 my-1">
          Convert to Uppercase
        </button>
        <button onClick={handleCopy} disabled={text.length===0 ? true : false} className="m-2 btn btn-primary mx-1 my-1">
          Copy to Clipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter text to show preview"}</p>
      </div>
    </>
  );
}
