import { React, useState } from "react";
import Sketch from "react-p5";
import "../styles/style2.css";
import { useContext } from "react";
import { UserContext } from "./DrawingMenu";
import { UserContext2 } from "./Sidebar";
let penColor = "#000000";
let bgColor = "#ffffff";
let strokeWt = 2;
let globalX = 0;
let globalY = 0;
let data;
let shape = "ellipse";
let hold = false;
function Canvas2() {
  const [arrayOfShapes, setArrayOfShapes] = useState([]);
  function setup(p5, parent) {
    p5.createCanvas(800, 800).parent(parent);
    p5.background(p5.color(bgColor));
    p5.stroke(penColor);
    p5.strokeWeight(strokeWt);
    p5.noFill();
    
  }
  
  const draw = (p5) => {
    if (arrayOfShapes !== null) {
      for (let i = 0; i < arrayOfShapes.length; i++) {
        if (arrayOfShapes[i].tool === "ellipse") {
          var r=Math.sqrt((arrayOfShapes[i].x-arrayOfShapes[i].px)**2 + (arrayOfShapes[i].y-arrayOfShapes[i].py)**2)
          p5.ellipse(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y,
            2*r,2*r
          );
          p5.point(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y
          )
        }
        else if(arrayOfShapes[i].tool==="line"){
          p5.line(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y,
            arrayOfShapes[i].px,
            arrayOfShapes[i].py
          );
        }
        else if(arrayOfShapes[i].tool=="rect"){
          p5.rectMode(p5.CENTER);
          p5.rect(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y,
            Math.abs(arrayOfShapes[i].x - arrayOfShapes[i].px) * 2,
            Math.abs(arrayOfShapes[i].y - arrayOfShapes[i].py) * 2
          );
        }
      }
    }
  };
  console.log(arrayOfShapes)
  const mouseReleased = (p5) => {
    data = {
      x: globalX,
      y: globalY,
      px: p5.mouseX,
      py: p5.mouseY,
      foregroundColor: penColor.toString("#rrggbb"),
      sW: strokeWt,
      tool: shape,
    };
    if(data.px>0 && data.py>0)
    setArrayOfShapes([...arrayOfShapes, data]);
    hold = false;
    
  };

  const mouseDragged = (p5) => {
    p5.background(p5.color(bgColor));
    
    if (hold === true) {
      if(shape==="ellipse"){
      //p5.push();
      p5.strokeWeight(strokeWt / 2);
      var r=Math.sqrt((globalX-p5.mouseX)**2 + (globalY-p5.mouseY)**2)
      p5.ellipse(
        globalX, globalY, 2*r,2*r
      );
      p5.point(globalX,globalY)

      //p5.pop();
      }
      else if(shape==="line"){
        p5.strokeWeight(strokeWt / 2);
        p5.line(globalX,globalY,p5.mouseX, p5.mouseY);
      }
      else if(shape==="rect"){
        p5.strokeWeight(strokeWt / 2);
        p5.rectMode(p5.CENTER);
        p5.rect(
          globalX,
          globalY,
          Math.abs(globalX - p5.mouseX) * 2,
          Math.abs(globalY - p5.mouseY) * 2
        );
      }
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
