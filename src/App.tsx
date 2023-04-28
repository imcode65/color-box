import React, { useState } from "react";
import ColorBox from "./components/ColorBox";
import "./App.css";

function App() {
  const [colors, setColors] = useState<string[]>([
    "blue",
    "red",
    "burlywood",
    "brown",
    "purple",
    "aqua",
    "aquamarine",
    "violet",
    "darkgray",
  ]);

  // Define a function to generate a random color string
  const generateColor = (): string => {
    let randomColorString = "#";
    const arrayOfColorFunctions = "0123456789abcdef";
    for (let x = 0; x < 6; x++) {
      let index = Math.floor(Math.random() * 16);
      let value = arrayOfColorFunctions[index];
      randomColorString += value;
    }
    return randomColorString;
  };

  // Define a function to handle click events on the box
  const onClickBox = () => {
    const newColors = colors.map(() => generateColor());
    setColors(newColors);
  };

  return (
    <div className="container grid">
      <div className="first-fourth--container">
        <ColorBox color={colors[0]} text="1" onClick={onClickBox} />
        <div className="second-fourth--container">
          <ColorBox
            className="second"
            color={colors[1]}
            text="2"
            onClick={onClickBox}
          />
          <div className="third-fourth--container">
            <ColorBox color={colors[2]} text="3" onClick={onClickBox} />
            <ColorBox color={colors[3]} text="4" onClick={onClickBox} />
          </div>
        </div>
      </div>
      <div className="fifth-nineth--container">
        <div className="fifth-sixth--container">
          <ColorBox color={colors[4]} text="5" onClick={onClickBox} />
          <ColorBox color={colors[5]} text="6" onClick={onClickBox} />
        </div>
        <ColorBox
          className="seventh"
          color={colors[6]}
          text="7"
          onClick={onClickBox}
        />
        <div className="eighth-nineth--container">
          <ColorBox color={colors[7]} text="8" onClick={onClickBox} />
          <ColorBox color={colors[8]} text="9" onClick={onClickBox} />
        </div>
      </div>
    </div>
  );
}

export default App;
