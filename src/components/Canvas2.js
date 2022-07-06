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
let cnv;
function doesLineInterceptCircle(A, B, C, radius) {
        var dist;
        const v1x = B.x - A.x;
        const v1y = B.y - A.y;
        const v2x = C.x - A.x;
        const v2y = C.y - A.y;
        // get the unit distance along the line of the closest point to
        // circle center
        const u = (v2x * v1x + v2y * v1y) / (v1y * v1y + v1x * v1x);
        
        
        // if the point is on the line segment get the distance squared
        // from that point to the circle center
        if(u >= 0 && u <= 1){
            dist  = (A.x + v1x * u - C.x) ** 2 + (A.y + v1y * u - C.y) ** 2;
        } else {
            // if closest point not on the line segment
            // use the unit distance to determine which end is closest
            // and get dist square to circle
            dist = u < 0 ?
                  (A.x - C.x) ** 2 + (A.y - C.y) ** 2 :
                  (B.x - C.x) ** 2 + (B.y - C.y) ** 2;
        }
        return dist < radius * radius;
     }
function doesRectInterceptCircle(circle,rect){
  var A,B,C,r=2;
  C={x:circle.x,y:circle.y}
  A={x:rect.x+(rect.w / 2),y:rect.y+rect.h/2}
  B={x:rect.x+(rect.w / 2),y:rect.y-rect.h/2}
  if(doesLineInterceptCircle(A,B,C,r)){
    return true
  }
  A={x:rect.x-(rect.w / 2),y:rect.y+rect.h/2}
  B={x:rect.x-(rect.w / 2),y:rect.y-rect.h/2}
  if(doesLineInterceptCircle(A,B,C,r)){
    return true
  }
  A={x:rect.x+(rect.w / 2),y:rect.y+rect.h/2}
  B={x:rect.x-(rect.w / 2),y:rect.y+rect.h/2}
  if(doesLineInterceptCircle(A,B,C,r)){
    return true
  }
  A={x:rect.x+(rect.w / 2),y:rect.y-rect.h/2}
  B={x:rect.x-(rect.w / 2),y:rect.y-rect.h/2}
  if(doesLineInterceptCircle(A,B,C,r)){
    return true
  }
  return false;
}
function doesCircleInterceptCircle(x1, y1, x2,
                      y2, r1, r2)
    {
        let distSq = (x1 - x2) * (x1 - x2) +
                     (y1 - y2) * (y1 - y2);
        let radSumSq = (r1 + r2) * (r1 + r2);
        if (distSq == radSumSq)
            return true
            ;
        else if (distSq > radSumSq)
            return false;
        else
            return true;
    }

function intersectionIndex(arrayOfShapes,x,y){
  if(x>0 && y>0){
        for(var i=0;i<arrayOfShapes.length;i++){
          if(arrayOfShapes[i].tool==="Ellipse"){
            var r=((arrayOfShapes[i].px - arrayOfShapes[i].x) ** 2 +(arrayOfShapes[i].py - arrayOfShapes[i].y) ** 2) **2;
            if(doesCircleInterceptCircle(x,y,arrayOfShapes[i].x,arrayOfShapes[i].y,2,Math.sqrt(r))){
              return i;
            }
          }
          else if(arrayOfShapes[i].tool==="Line"){
            var C={x: x,y:y};
            var A={x:arrayOfShapes[i].x,y:arrayOfShapes[i].y}
            var B={x:arrayOfShapes[i].px,y:arrayOfShapes[i].py}
            if(doesLineInterceptCircle(A,B,C,2)){
              return i;
            }
          }
          else if(arrayOfShapes[i].tool==="Rect"){
            var circle={x:x,y:y,r:2}
            var rect={
              x:arrayOfShapes[i].x,
              y:arrayOfShapes[i].y,
              w:Math.abs(arrayOfShapes[i].x - arrayOfShapes[i].px) * 2,
              h:Math.abs(arrayOfShapes[i].y - arrayOfShapes[i].py) * 2
            }
            if(doesRectInterceptCircle(circle,rect)){
              return i;
            }

          }
        }
        return null
      }
}

function Canvas2() {
  shape = useContext(UserContext);
  const [arrayOfShapes, setArrayOfShapes] = useState([]);
  const [arrayOfShapes2, setArrayOfShapes2] = useState([]);
  const [delt,setDelt]=useState(false)
  console.log(arrayOfShapes)
  function setup(p5, parent) {
    cnv=p5.createCanvas(800, 800).parent(parent);
    p5.frameRate(100)
    p5.background(p5.color(bgColor));

    p5.stroke(penColor);
    p5.strokeWeight(strokeWt);
    p5.noFill();
    cnv.mouseClicked(mouseClicked);
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
    if (data.px > 0 && data.py > 0 && data.tool!=="") setArrayOfShapes([...arrayOfShapes, data]);
    hold = false;
  };

  const mouseDragged = (p5) => {
    if (hold === true) {
    p5.background(p5.color(bgColor));
    
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
      }
    }
  };

  const mousePressed = (p5) => {
    if(hold===false){
      console.log("it got into mp false")
    if (p5.mouseX > 0 && p5.mouseY > 0) {
      globalX = p5.mouseX;
      globalY = p5.mouseY;
    }
  }
  else{
    console.log("it got into mp true")
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
    if (data.px > 0 && data.py > 0 && data.tool!=="") {
      setArrayOfShapes([...arrayOfShapes, data]);
      setArrayOfShapes2([])
    }

  }
  
  if(hold===false && shape==="Delete"){
      var x=p5.mouseX;
      var y=p5.mouseY;
      if(x>0 && y>0){
        p5.background(p5.color(bgColor));
        var i=intersectionIndex(arrayOfShapes,x,y)
        if(i!=null){
        if(arrayOfShapes2.length>0){
          setArrayOfShapes2([...arrayOfShapes2,arrayOfShapes[i]]);
        }
        else{
          setArrayOfShapes2([arrayOfShapes[i]]);
        }
        arrayOfShapes.splice(i,1)
        setArrayOfShapes([...arrayOfShapes])
      }
    }
  }
    if(hold===false && shape==="Trim"){
      var x=p5.mouseX
      var y=p5.mouseY
      if(x>0 && y>0){
        p5.background(p5.color(bgColor));
        var i=intersectionIndex(arrayOfShapes,x,y)
        arrayOfShapes=trimIt(arrayOfShapes,i,x,y)

      }
    }
  };
  // undo and redo on key pressed
  const keyPressed = (p5) => {
    p5.background(p5.color(bgColor));
    var setUndo=arrayOfShapes;
    var setRedo=arrayOfShapes2;
    if(arrayOfShapes.length>0 || arrayOfShapes2.length>0){
      if(p5.key==='z'){
        if(arrayOfShapes.length>0){
          if(arrayOfShapes2.length>0){
            setRedo=[...arrayOfShapes2,arrayOfShapes[arrayOfShapes.length-1]];
          }
          else{
            setRedo=[arrayOfShapes[arrayOfShapes.length-1]];
          }
          setUndo=arrayOfShapes.slice(0,arrayOfShapes.length-1)
        }
        setArrayOfShapes([...setUndo])
        setArrayOfShapes2([...setRedo]);
      }
      if(p5.key==='y'){
        if(arrayOfShapes2.length>0){
          if(arrayOfShapes.length>0){
            setUndo=[...arrayOfShapes,arrayOfShapes2[arrayOfShapes2.length-1]];
          }
          else{
            setUndo=[arrayOfShapes2[arrayOfShapes2.length-1]];
          }
          setRedo=arrayOfShapes2.slice(0,arrayOfShapes2.length-1);
        }
        setArrayOfShapes([...setUndo])
        setArrayOfShapes2([...setRedo]);
      }
    }
    
  };
  const mouseClicked=(p5)=>{
      console.log(p5)
    if(hold===false && shape!=="Delete" && shape!==""){
      hold=true
  }
  else{
    hold = false;
  }
  }
  return (
    <div>
    <Sketch
      setup={setup}
      // draw={draw}
      mousePressed={mousePressed}
      // mouseDragged={mouseDragged}
      //mouseReleased={mouseReleased}
      mouseDragged={mouseDragged}
      mouseMoved={mouseDragged}
      //mouseClicked={mouseClicked}
      keyPressed={keyPressed}
      draw={draw}
    />
    </div>
  );
}

export default Canvas2;
