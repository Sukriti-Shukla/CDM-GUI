import React from "react";
import { createContext, useContext, useState } from "react";
import "../styles/drawingMenu.css";

export const UserContext = createContext();

function DrawingMenu(props) {
  const [draw, setDraw] = useState("line");
  const [del, setDel] = useState("False");
  const handleClickLine = () => {
    document.getElementById("line-btn").classList.add("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("delete-btn").classList.remove("active");
    setDraw("Line");
    console.log(draw);
  };
  const handleClickCircle = () => {
    document.getElementById("circle-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    document.getElementById("delete-btn").classList.remove("active");
    setDraw("Ellipse");
    console.log(draw);
  };
  const handleClickRectangle = () => {
    document.getElementById("rect-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    document.getElementById("delete-btn").classList.remove("active");
    setDraw("Rect");
    console.log(draw);
  };
  const handleClickPoint = () => {
    document.getElementById("point-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    document.getElementById("delete-btn").classList.remove("active");
    setDraw("Point");
    console.log(draw);
  };
  const handleClickReset = () => {
    document.getElementById("reset-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("delete-btn").classList.remove("active");
    setDraw("Reset");
    console.log(draw);
  };
  const handleClickDelete = () => {
    document.getElementById("delete-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDel("True");
    console.log(draw);
  };
  const handleClickTriangle = () => {
    document.getElementById("triangle-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDraw("Triangle");
    console.log(draw);
  };
  const handleClickPentagon = () => {
    document.getElementById("pentagon-btn").classList.add("active");
    document.getElementById("line-btn").classList.remove("active");
    document.getElementById("circle-btn").classList.remove("active");
    document.getElementById("point-btn").classList.remove("active");
    document.getElementById("rect-btn").classList.remove("active");
    document.getElementById("reset-btn").classList.remove("active");
    setDraw("Pentagon");
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
      {/* <a href="#triangle" id="triangle-btn" onClick={handleClickTriangle}>
        Triangle
      </a>
      <a href="#pentagon" id="pentagon-btn" onClick={handleClickPentagon}>
        Pentagon
      </a> */}
      <a href="#reset" id="reset-btn" onClick={handleClickReset}>
        Reset
      </a>
      <a href="#delete" id="delete-btn" onClick={handleClickDelete}>
        Delete
      </a>
      <UserContext.Provider value={draw}>{props.children}</UserContext.Provider>
    </div>
  );
}

export default DrawingMenu;
