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
  const [text, setText] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");

  const stylingBoxes = stylings.map((style) => (
    <button className="btn btn-light" style={styles[style]} key={style}>
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3" onClick={() => console.log("You clicked a style")}>
        {stylingBoxes}
      </div>
      <textarea
        setText={setText}
        onChange={(event) => {
          setText(event.target.value);
        }}
        placeholder="Try me!"
      />
      <div className="my-3" onClick={() => console.log("You clicked a color")}>
        {colorBoxes}
      </div>
    </div>
  );
}

export default App;
