import React from "react";
import Sketch from "react-p5";
import "../styles/style2.css";
import { useContext } from "react";
import { UserContext } from "./DrawingMenu";
import { UserContext2 } from "./Sidebar";
// import p5Types from "p5";

let drawShape;
let doOperation;
let points = [];
let arrayOfShapes = [];
let data;
let hold = false;
let penColor = "black";
let globalX = 0;
let globalY = 0;

const setup = (p5, parent) => {
  p5.createCanvas(800, 500).parent(parent);
  p5.background(255, 255, 255);
  p5.stroke(0, 0, 0);
  p5.frameRate(10);
};

const mousePressed = (p5) => {
  if (drawShape === "Line") {
    points.push([p5.mouseX, p5.mouseY]);
  }
  if (drawShape === "Circle") {
    points.push([p5.mouseX, p5.mouseY]);
  }
  if (drawShape === "Rectangle") {
    points.push([p5.mouseX, p5.mouseY]);
  }
  if (drawShape === "Point") {
    points.push([p5.mouseX, p5.mouseY]);
  }
  if (drawShape === "Triangle") {
    points.push([p5.mouseX, p5.mouseY]);
  }
  if (drawShape === "Pentagon") {
    points.push([p5.mouseX, p5.mouseY]);
  }
};

const mouseReleased = (p5) => {
  if (drawShape === "Line") {
    console.log(points);
    p5.line(points[0][0], points[0][1], p5.mouseX, p5.mouseY);
    points = [];
  }
  if (drawShape === "Circle") {
    console.log(points);
    let r = Math.sqrt(
      (points[0][0] - p5.mouseX) * (points[0][0] - p5.mouseX) +
        (points[0][1] - p5.mouseY) * (points[0][1] - p5.mouseY)
    );
    p5.ellipse(points[0][0], points[0][1], r * 2, r * 2);
    p5.point(points[0][0], points[0][1]);

    points = [];
  }
  if (drawShape === "Rectangle") {
    p5.rectMode(p5.CENTER);
    p5.rect(
      points[0][0],
      points[0][1],
      Math.abs(points[0][0] - p5.mouseX) * 2,
      Math.abs(points[0][1] - p5.mouseY) * 2
    );
    p5.point(points[0][0], points[0][1]);
    points = [];
  }
  if (drawShape === "Point") {
    p5.point(p5.mouseX, p5.mouseY);
    points = [];
  }
  if (drawShape === "Triangle") {
    p5.triangle(
      points[0][0],
      points[0][1],
      points[0][0] + 200,
      points[0][1] + 200,
      p5.mouseX,
      p5.mouseY
    );
    points = [];
  }
  if (drawShape === "Pentagon") {
    p5.beginShape();
    for (let i = 0; i <= 360; i++) {
      let angle = p5.radians(i);
      let x1 = 1 + 20 * p5.cos(angle);
      let y1 = 1 + 20 * p5.sin(angle);
      p5.vertex(x1, y1);
    }
    points = [];
  }
  if (drawShape === "Reset") {
    p5.background(255, 255, 255);
  }
};
function makeRohmbus(p5, x, y, r) {
  p5.beginShape();
  for (let i = 0; i <= 360; i++) {
    let angle = p5.radians(i);
    let x1 = x + r * p5.cos(angle);
    let y1 = y + r * p5.sin(angle);
    p5.vertex(x1, y1);
  }
}

function Canvas(props) {
  drawShape = useContext(UserContext);
  doOperation = useContext(UserContext2);
  return (
    <Sketch
      setup={setup}
      // draw={draw}
      mousePressed={mousePressed}
      // mouseDragged={mouseDragged}
      mouseReleased={mouseReleased}
    />
  );
}

export default Canvas;
