import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  let [text, setText] = useState("black");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");

  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => setStyle(style)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => setColor(color)}
    />
  ));

  return (
    <div className="App">
      <h1 className="title">Text Editor</h1>
      <div className="my-3">{stylingBoxes}</div>
      <textarea
        rows="4"
        cols="50"
        style={{
          color: color,
          fontWeight: style.includes("bold") ? "bold" : "",
          fontStyle: style.includes("italic") ? "italic" : "",
          textDecorationLine: style.includes("underline") ? "underline" : "",
          fontSize: 30,
        }}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
