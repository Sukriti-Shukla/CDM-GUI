import React from "react";
import Sketch from "react-p5";
import "../styles/style2.css";

function Canvas(props) {
  var st_x,st_y;
  var points=[]
  const setup = (p5, parent) => {

    p5.createCanvas(600, 600).parent(parent);
    p5.background(255, 255, 255);
    p5.stroke(0,0,0)
  };
  const draw = (p5) => {
    //if (p5.mouseIsPressed === true) {
    //p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
  //}
  };
  
   const mp = (p5,event) =>{
    if(props.drawState==="Line"){
    //console.log(event)
    st_x=p5.mouseX;
    st_y=p5.mouseY;
    points.push([st_x,st_y])
    console.log(points)
    }
  }
  const md=(p5,event)=>{
    if(props.drawState==="Line"){
    points.push([p5.mouseX,p5.mouseY])
    //console.log(event)
    p5.beginShape(p5.LINES);
    p5.vertex(points[0][0],points[0][1])
    p5.vertex(points[1][0],points[1][1])
    p5.endShape()
    console.log(points)
    points.pop()
    }
  }
  const mr=(p5,event)=>{
    if(props.drawState==="Line"){
    //console.log(event)
    p5.line(points[0][1],points[0][1],p5.mouseX,p5.mouseY)
    points=[]
    console.log(points)
    }
  }

  return (
      <Sketch setup={setup} draw={draw} mousePressed={mp} mouseDragged={md} mouseReleased={mr}/>
  );
}

export default Canvas;
