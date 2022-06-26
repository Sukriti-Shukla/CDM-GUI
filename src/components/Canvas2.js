import { React, useState } from "react";
import Sketch from "react-p5";
import "../styles/style2.css";
import { useContext } from "react";
import { UserContext } from "./DrawingMenu";
import { UserContext2 } from "./Sidebar";
let penColor = "#000000";
let bgColor = "#ffffff";
let strokeWt = 4;
let globalX = 0;
let globalY = 0;
let data;
let shape = "ellipse";
let hold = false;
function Canvas2() {
  const [arrayOfShapes, setArrayOfShapes] = useState([]);
  function setup(p5, parent) {
    p5.createCanvas(800, 500).parent(parent);
    p5.stroke(penColor);
    p5.strokeWeight(strokeWt);
    p5.noFill();
    p5.frameRate(10);
  }

  const draw = (p5) => {
    p5.background(p5.color(bgColor));
    if (arrayOfShapes !== null) {
      for (let i = 0; i < arrayOfShapes.length; i++) {
        if (arrayOfShapes[i].tool === "ellipse") {
          p5.ellipseMode(p5.CORNERS);
          p5.ellipse(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y,
            arrayOfShapes[i].px,
            arrayOfShapes[i].py
          );
        }
      }
    }
  };

  const mouseReleased = (p5) => {
    data = {
      x: globalX,
      y: globalY,
      px: p5.pmouseX,
      py: p5.pmouseY,
      foregroundColor: penColor.toString("#rrggbb"),
      sW: strokeWt,
      tool: shape,
    };
    setArrayOfShapes([...arrayOfShapes, data]);
    hold = false;
  };

  const mouseDragged = (p5) => {
    if (hold === true) {
      p5.push();
      p5.strokeWeight(strokeWt / 2);
      p5.ellipseMode(p5.CORNERS);
      p5.ellipse(globalX, globalY, p5.mouseX, p5.mouseY);
      p5.pop();
    }
  };

  const mousePressed = (p5) => {
    if (p5.mouseX > 0 && p5.mouseY > 0) {
      globalX = p5.mouseX;
      globalY = p5.mouseY;
      hold = true;
    }
  };

  return (
    <Sketch
      setup={setup}
      // draw={draw}
      mousePressed={mousePressed}
      // mouseDragged={mouseDragged}
      mouseReleased={mouseReleased}
      mouseDragged={mouseDragged}
      draw={draw}
    />
  );
}

export default Canvas2;
