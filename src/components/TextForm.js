import React, { useState } from "react";

var FileSaver = require("file-saver");

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Text is converted to Uppercase", "success")
  }

  function handleLowercase() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleTitlecase() {
    let spliText = text.split(" ");
    let firstCapitalText = spliText
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(firstCapitalText);
  }

  function handleAlternatecase() {
    let alternateText = text
      .split("")
      .map((char, index) => {
        if (index % 2 !== 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
    setText(alternateText);
  }

  function handleInversecase() {
    let inverseText = text.split('').map((char) => {
      if(char === char.toLowerCase())
      {
        return char.toUpperCase()
      }
      else
      {
        return char.toLowerCase()
      }
    }).join('')
    setText(inverseText)
  }

  function handleCapitalizecase() {
    let spliText = text.split(" ");
    let firstCapitalText = spliText
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(firstCapitalText);
  }

  function handleDownload() {
    var content = text;
    // any kind of extension (.txt,.cpp,.cs,.bat)
    var filename = "mytext.txt";

    var blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    FileSaver.saveAs(blob, filename);
  }

  function handleCopy() {
    navigator.clipboard.writeText(text); //This can be written as
    /* var txt = document.getElementById('myBox')
            txt.select()
            navigator.clipboard.wrtieText(txt.value)
        */
    alert("Copied to Clipboard");
  }

  function handleClear() {
    setText("");
  }

  function handleExtraSpaces(text) {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText)
  }

  function totalWords(text)
  {
    let textAfterRemovingSpace = text.split(" ").filter((word) =>{
      return word !== ''
    })
    return textAfterRemovingSpace.length
  }

  function textLength(text)
  {
    let totalTextLength = text.split('').filter((char) => {
      return char !== ' '
    })
    return totalTextLength.length
  }

  function totalLines(text)
  {
    if(text.length === 0){
      return 0
    }
    else{
     return text.split(/\r|\r\n|\n/).length
    }
  }

  return (
    <>
      <div className={`container text-${mode === "dark" ? "white" : "black"}`}>
        {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div> */}
        <h1>{heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            style={{ backgroundColor: mode === "dark" ? "grey" : "white" }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleLowercase}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUppercase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalizecase}>
          CapitalizeCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTitlecase}>
          TitleCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInversecase}>
          InverseCase
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={handleAlternatecase}
        >
          aLtErNaTiNg cAsE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownload}>
          Download Text
        </button>
        <button className="btn btn-primary mx-1" onClick={() => {handleExtraSpaces(text)}}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className={`container my-3 text-${mode === "dark" ? "white" : "black"}`}
      >
        <h1>Text Outputs: </h1>
        <p>Total Words: {totalWords(text)}</p>
        <p>Total Characters: {textLength(text)}</p>
        <p>Total Lines: {totalLines(text)}</p>
        <p>{0.008 * totalWords(text)} Minutes to Read</p>
        <h2>Preview</h2>
        <p>
          {text === "" ? "Type Above in the Textarea to Preview Here" : text}
        </p>
      </div>
    </>
  );
}


/* Holla amigogit  */