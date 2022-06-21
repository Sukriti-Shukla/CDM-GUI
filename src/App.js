import { useEffect, useRef, useState } from "react";
import "../src/styles/style.css";
import Canvas from "./components/Canvas";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Sketch from "react-p5";
import { mouseX, mouseY } from "react-p5";
import "../src/styles/style2.css";
import DrawingMenu from "./components/DrawingMenu";
import { Route, Routes } from "react-router-dom";
import Result from "./components/Result";
let dragX, dragY, moveX, moveY;

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255, 255, 255);

    p5.rect(100, 100, 150, 150);
    p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    p5.ellipse(300, 100, 100);
  };

  return (
    <div>
      <ChakraProvider>
        <Nav />
        <DrawingMenu />
        <Sidebar />
        {/* <div id="container2">
          <Sketch setup={setup} draw={draw} />
        </div> */}
        <Canvas />
      </ChakraProvider>
      {/* <Route path="/result" element={<Result />}></Route> */}
    </div>
  );
}

export default App;
