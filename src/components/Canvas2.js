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
let shape;
let hold = false;

function Canvas2() {
  shape = useContext(UserContext);
  const [arrayOfShapes, setArrayOfShapes] = useState([]);
  const [arrayOfShapes2, setArrayOfShapes2] = useState([]);
  const [delt, setDelt] = useState("FAlse");
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
        if (arrayOfShapes[i].tool === "Ellipse") {
          var r = Math.sqrt(
            (arrayOfShapes[i].x - arrayOfShapes[i].px) ** 2 +
              (arrayOfShapes[i].y - arrayOfShapes[i].py) ** 2
          );
          p5.ellipse(arrayOfShapes[i].x, arrayOfShapes[i].y, 2 * r, 2 * r);
          p5.point(arrayOfShapes[i].x, arrayOfShapes[i].y);
        } else if (arrayOfShapes[i].tool === "Line") {
          p5.line(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y,
            arrayOfShapes[i].px,
            arrayOfShapes[i].py
          );
        } else if (arrayOfShapes[i].tool === "Rect") {
          p5.rectMode(p5.CENTER);
          p5.rect(
            arrayOfShapes[i].x,
            arrayOfShapes[i].y,
            Math.abs(arrayOfShapes[i].x - arrayOfShapes[i].px) * 2,
            Math.abs(arrayOfShapes[i].y - arrayOfShapes[i].py) * 2
          );
        } else if (arrayOfShapes[i].tool === "Point") {
          p5.point(arrayOfShapes[i].x, arrayOfShapes[i].y);
        } else if (arrayOfShapes[i].tool === "Reset") {
          p5.reset();
          setArrayOfShapes([]);
        }
      }
    }
  };
  console.log(arrayOfShapes);
  const mouseReleased = (p5) => {
    p5.text("", p5.mouseX, p5.mouseY);
    data = {
      x: globalX,
      y: globalY,
      px: p5.mouseX,
      py: p5.mouseY,
      foregroundColor: penColor.toString("#rrggbb"),
      sW: strokeWt,
      tool: shape,
    };
    if (data.px > 0 && data.py > 0) setArrayOfShapes([...arrayOfShapes, data]);
    hold = false;
  };

  const mouseDragged = (p5) => {
    p5.background(p5.color(bgColor));
    if (delt === "True") {
      if (p5.mouseX > 0 && p5.mouseY > 0) {
        for (let i = 0; i < arrayOfShapes.length; i++) {
          if (arrayOfShapes[i].shape === "Ellipse") {
            console.log(arrayOfShapes[i].x, arrayOfShapes[i].y);
            if (
              (p5.mouseX - arrayOfShapes[i].x) ** 2 +
                (p5.mouseY - arrayOfShapes[i].y) ** 2 <
              ((arrayOfShapes[i].px - arrayOfShapes[i].x) ** 2 +
                (arrayOfShapes[i].py - arrayOfShapes[i].y) ** 2) **
                2
            ) {
              console.log("yes");
              setArrayOfShapes(arrayOfShapes.splice(i, 0));
              console.log(arrayOfShapes);
            }
          } else if (arrayOfShapes[i].shape === "Line") {
            if (
              p5.mouseX > arrayOfShapes[i].x &&
              p5.mouseX <
                arrayOfShapes[i].x +
                  Math.abs(arrayOfShapes[i].x - arrayOfShapes[i].px) &&
              p5.mouseY > arrayOfShapes[i].y &&
              p5.mouseY <
                arrayOfShapes[i].y +
                  Math.abs(arrayOfShapes[i].y - arrayOfShapes[i].py)
            ) {
              setArrayOfShapes(arrayOfShapes.splice(i, 1));
            }
          }
        }
      }
      setDelt("False");
    } else if (hold === true) {
      if (shape === "Ellipse") {
        //p5.push();
        p5.strokeWeight(strokeWt / 2);
        var r = Math.sqrt(
          (globalX - p5.mouseX) ** 2 + (globalY - p5.mouseY) ** 2
        );
        p5.ellipse(globalX, globalY, 2 * r, 2 * r);
        p5.point(globalX, globalY);
        p5.text(
          "( centre =(" +
            Math.round(globalX) +
            ", " +
            Math.round(globalY) +
            ") radius=" +
            r +
            ")",
          p5.mouseX,
          p5.mouseY
        );
        //p5.pop();
      } else if (shape === "Line") {
        p5.strokeWeight(strokeWt / 2);
        p5.line(globalX, globalY, p5.mouseX, p5.mouseY);
        var r1 = Math.sqrt(
          (globalX - p5.mouseX) ** 2 + (globalY - p5.mouseY) ** 2
        );
        p5.text(
          "( starting point =(" +
            Math.round(globalX) +
            ", " +
            Math.round(globalY) +
            ") length=" +
            r1 +
            ")",
          p5.mouseX,
          p5.mouseY
        );
      } else if (shape === "Rect") {
        p5.strokeWeight(strokeWt / 2);
        p5.rectMode(p5.CENTER);
        p5.rect(
          globalX,
          globalY,
          Math.abs(globalX - p5.mouseX) * 2,
          Math.abs(globalY - p5.mouseY) * 2
        );
        var r2 = Math.sqrt(
          (globalX - p5.mouseX) ** 2 + (globalY - p5.mouseY) ** 2
        );
        p5.text(
          "( centre =(" +
            Math.round(globalX) +
            ", " +
            Math.round(globalY) +
            ") length= " +
            Math.abs(globalX - p5.mouseX) * 2 +
            " width=" +
            Math.abs(globalY - p5.mouseY) * 2 +
            ")",
          p5.mouseX,
          p5.mouseY
        );
      } else if (shape === "Point") {
        p5.text(
          "(" + Math.round(p5.mouseX) + ", " + Math.round(p5.mouseY) + ")",
          p5.mouseX,
          p5.mouseY
        );
        p5.strokeWeight(strokeWt / 2);
        p5.point(globalX, globalY);
      } else if (shape === "Delete") {
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

  // undo and redo on key pressed
  const keyPressed = (p5) => {
    if (p5.key === "z") {
      if (arrayOfShapes.length > 0) {
        setArrayOfShapes(arrayOfShapes.slice(0, arrayOfShapes.length - 1));
        setArrayOfShapes2([
          ...arrayOfShapes2,
          arrayOfShapes[arrayOfShapes.length - 1],
        ]);
      }
    } else if (p5.key === "x") {
      if (arrayOfShapes.length > 0) {
        setArrayOfShapes([
          ...arrayOfShapes,
          arrayOfShapes2[arrayOfShapes2.length - 1],
        ]);
        setArrayOfShapes2(arrayOfShapes2.slice(0, arrayOfShapes2.length - 1));
      }
    }
  };
  // delete shapes
  const del = (p5) => {
    setDelt("True");
  };

  return (
    <div>
      <button onClick={del}>Delete</button>
      <Sketch
        setup={setup}
        // draw={draw}
        mousePressed={mousePressed}
        // mouseDragged={mouseDragged}
        mouseReleased={mouseReleased}
        mouseDragged={mouseDragged}
        keyPressed={keyPressed}
        draw={draw}
      />
    </div>
  );
}

export default Canvas2;
