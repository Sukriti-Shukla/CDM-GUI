import React from "react";
import Sketch from "react-p5";
import "../styles/style2.css";
import { useContext } from "react";
import { UserContext } from "./DrawingMenu";

function Canvas(props) {
  // const drawShape = useContext(UserContext);
  //   var st_x, st_y;
  //   var points = [];
  //   var point_draw = [];
  //   const setup = (p5, parent) => {
  //     p5.createCanvas(800, 500).parent(parent);
  //     p5.background(255, 255, 255);
  //     p5.stroke(0, 0, 0);
  //   };
  //   const draw = (p5) => {
  //     p5.beginShape(p5.LINES);
  //     for (let i = 0; i < point_draw.length; i++) {
  //       p5.vertex(point_draw[i][0][0], point_draw[i][0][1]);
  //       p5.vertex(point_draw[i][1][0], point_draw[i][1][1]);
  //     }
  //     p5.endShape();
  //   };

  //   const mp = (p5, event) => {
  //     console.log(drawShape);
  //     if (props.drawState === "Line") {
  //       //console.log(event)~
  //       st_x = p5.mouseX;
  //       st_y = p5.mouseY;
  //       points.push([st_x, st_y]);
  //       console.log(points);
  //     }
  //   };
  //   const md = (p5, event) => {
  //     if (props.drawState === "Line") {
  //       points.push([p5.mouseX, p5.mouseY]);
  //       //console.log(event)

  //       p5.background(255, 255, 255);
  //       p5.beginShape(p5.LINES);
  //       p5.vertex(points[0][0], points[0][1]);
  //       p5.vertex(points[1][0], points[1][1]);
  //       p5.endShape();
  //       console.log(points);
  //       points.pop();
  //     }
  //   };
  //   const mr = (p5, event) => {
  //     if (props.drawState === "Line") {
  //       console.log(event);
  //       p5.line(points[0][1], points[0][1], p5.mouseX, p5.mouseY);
  //       //points.pop();
  //       points.push([p5.mouseX, p5.mouseY]);
  //       console.log(points);
  //       point_draw.push(points);
  //       points = [];
  //       console.log(point_draw);
  //       p5.beginShape(p5.LINES);
  //       for (let i = 0; i < point_draw.length; i++) {
  //         p5.vertex(point_draw[i][0][0], point_draw[i][0][1]);
  //         p5.vertex(point_draw[i][1][0], point_draw[i][1][1]);
  //       }
  //       p5.endShape();
  //     }
  //   };

  //   return (
  //     <Sketch
  //       setup={setup}
  //       draw={draw}
  //       mousePressed={mp}
  //       mouseDragged={md}
  //       mouseReleased={mr}
  //     />
  //   );
  // }

  // export default Canvas;
  const drawShape = useContext(UserContext);
  var st_x, st_y;
  var points = [];
  var point_draw = [];
  const setup = (p5, parent) => {
    p5.createCanvas(800, 500).parent(parent);
    p5.background(255, 255, 255);
    p5.stroke(0, 0, 0);
  };
  const draw = (p5) => {
    p5.beginShape(p5.LINES);
    for (let i = 0; i < point_draw.length; i++) {
      p5.vertex(point_draw[i][0][0], point_draw[i][0][1]);
      p5.vertex(point_draw[i][1][0], point_draw[i][1][1]);
    }
    p5.endShape();
    /*if (p5.mouseIsPressed === true) {
    points.push([p5.mouseX,p5.mouseY])
    p5.beginShape(p5.LINES);
    p5.vertex(points[0][0],points[0][1])
    p5.vertex(points[1][0],points[1][1])
    p5.endShape()
    console.log(points)
    points.pop()
  }*/
  };

  const mp = (p5, event) => {
    if (drawShape === "Line") {
      //console.log(event)~
      st_x = p5.mouseX;
      st_y = p5.mouseY;
      points.push([st_x, st_y]);
      //console.log(points)
    }
  };
  const md = (p5, event) => {
    if (drawShape === "Line") {
      points.push([p5.mouseX, p5.mouseY]);
      //console.log(event)

      p5.background(255, 255, 255);
      p5.beginShape(p5.LINES);
      p5.vertex(points[0][0], points[0][1]);
      p5.vertex(points[1][0], points[1][1]);
      p5.endShape();
      //console.log(points)
      points.pop();
    }
  };
  const mr = (p5, event) => {
    if (drawShape === "Line") {
      //console.log(event)
      //p5.line(points[0][1],points[0][1],p5.mouseX,p5.mouseY)
      points.push([p5.mouseX, p5.mouseY]);
      console.log(points);
      point_draw.push(points);
      points = [];
      console.log(point_draw);
      p5.beginShape(p5.LINES);
      for (let i = 0; i < point_draw.length; i++) {
        p5.vertex(point_draw[i][0][0], point_draw[i][0][1]);
        p5.vertex(point_draw[i][1][0], point_draw[i][1][1]);
      }
      p5.endShape();
    }
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mousePressed={mp}
      mouseDragged={md}
      mouseReleased={mr}
    />
  );
}

export default Canvas;
