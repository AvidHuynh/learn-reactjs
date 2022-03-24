import React, { useState } from "react";
import "./style.scss";

ColorBox.propTypes = {};

function randomColor() {
  const listColor = ["deeppink", "green", "yellow", "black", "blue"];
  const colorRandom = Math.trunc(Math.random() * 5);
  return listColor[colorRandom];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = randomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
