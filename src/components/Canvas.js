import React from "react";
import Sketch from "react-p5";
import "../styles/style2.css";

function Canvas() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 600).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255, 130, 20);
    p5.ellipse(200.0, 100.5, 100.1);
    p5.ellipse(300, 100, 100);
  };

  return (
    <div id="container2">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default Canvas;
