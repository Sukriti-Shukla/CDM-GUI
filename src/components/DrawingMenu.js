import React from "react";
import { createContext, useContext, useState } from "react";
import "../styles/drawingMenu.css";

export const UserContext = createContext();

function DrawingMenu(props) {
  const [draw, setDraw] = useState("line");
  const handleClickLine = () => {
    document.getElementById("line-btn").classList.add("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDraw("Line");
    console.log(draw);
  };
  const handleClickCircle = () => {
    document.getElementById("circle-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDraw("Circle");
    console.log(draw);
  };
  const handleClickRectangle = () => {
    document.getElementById("rect-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDraw("Rectangle");
    console.log(draw);
  };
  const handleClickPoint = () => {
    document.getElementById("point-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDraw("Point");
    console.log(draw);
  };
  const handleClickReset = () => {
    document.getElementById("reset-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    setDraw("Reset");
    console.log(draw);
  };
  return (
    <div class="topnav">
      <a class="active2" href="#home">
        Tools
      </a>
      <a href="#line" id="line-btn" onClick={handleClickLine}>
        Line
      </a>
      <a href="#circle" id="circle-btn" onClick={handleClickCircle}>
        Circle
      </a>
      {/* <a href="#ellipse" id="ellipse-btn">
        Ellipse
      </a> */}
      <a href="#rect" id="rect-btn" onClick={handleClickRectangle}>
        Rectangle
      </a>
      {/* <a href="#curve" id="curve-btn">
        Curves
      </a> */}
      <a href="#point" id="point-btn" onClick={handleClickPoint}>
        Point
      </a>
      <a href="#reset" id="reset-btn" onClick={handleClickReset}>
        Reset
      </a>
      <UserContext.Provider value={draw}>{props.children}</UserContext.Provider>
    </div>
  );
}

export default DrawingMenu;
