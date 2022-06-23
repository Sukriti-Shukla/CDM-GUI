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
    setDraw("Circle");
    console.log(draw);
  };
  const handleClickRectangle = () => {
    setDraw("Rectangle");
    console.log(draw);
  };
  const handleClickPoint = () => {
    setDraw("Point");
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
      <a href="#rect" onClick={handleClickRectangle}>
        Rectangle
      </a>
      <a href="#curve">Curves</a>
      <a href="#point" onClick={handleClickPoint}>
        Point
      </a>
      <UserContext.Provider value={draw}>{props.children}</UserContext.Provider>
    </div>
  );
}

export default DrawingMenu;
