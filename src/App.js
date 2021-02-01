import "./App.css";
import React, { useState } from "react";
const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [textArea, setTextArea] = useState({
    color: "",
    fontStyle: "",
    fontWeight: "",
    textDecorationLine: "",
    fontSize: 40,
  });

  const setTextColor = (color) => {
    setTextArea((previousTextArea) => ({
      ...previousTextArea,
      color: color,
    }));
  };

  const setTextFont = (Font, event) => {
    const font = Object.keys(Font)[0];
    if (textArea[font] === "") {
      setTextArea((previousTextArea) => ({
        ...previousTextArea,
        ...Font,
      }));
      event.target.className = "btn btn-primary";
    } else {
      const newStyle = {};
      newStyle[font] = "";
      setTextArea((previousTextArea) => ({
        ...previousTextArea,
        ...newStyle,
      }));
      event.target.className = "btn btn-light";
    }
  };

  //set button style
  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={(event) => setTextFont(styles[style], event)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => setTextColor(color)}
    />
  ));

  return (
    <div className="App">
      <h1 className="title">Text Editor</h1>
      <div className="my-3">{stylingBoxes}</div>
      <textarea
        placeholder="What's on your mind?"
        rows="5"
        cols="60"
        style={textArea}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
