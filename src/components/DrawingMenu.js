import React from "react";
import { createContext, useContext, useState } from "react";
import "../styles/drawingMenu.css";

export const UserContext = createContext();

function DrawingMenu(props) {
  const [draw, setDraw] = useState("line");
  const handleClickLine = () => {
    setDraw("Line");
    console.log(draw);
  };
  const handleClickCircle = () => {
    setDraw("circle");
    console.log(draw);
  };
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Tools
      </a>
      <a href="#line" onClick={handleClickLine}>
        Line
      </a>
      <a href="#circle" onClick={handleClickCircle}>
        Circle
      </a>
      <a href="#ellipse">Ellipse</a>
      <a href="#rect">Rectangle</a>
      <a href="#curve">Curves</a>
      <a href="#point">Point</a>
      <UserContext.Provider value={draw}>{props.children}</UserContext.Provider>
    </div>
  );
}

export default DrawingMenu;
