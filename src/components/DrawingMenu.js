import React from "react";
import "../styles/drawingMenu.css";

function DrawingMenu() {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Tools
      </a>
      <a href="#line">Line</a>
      <a href="#circle">Circle</a>
      <a href="#ellipse">Ellipse</a>
      <a href="#rect">Rectangle</a>
      <a href="#curve">Curves</a>
      <a href="#point">Point</a>
    </div>
  );
}

export default DrawingMenu;
