import { useEffect, useRef, useState, useContext } from "react";
import "../src/styles/style.css";
import Canvas from "./components/Canvas";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Sketch from "react-p5";
import { mouseX, mouseY } from "react-p5";
import "../src/styles/style2.css";
import { UserContext } from "./components/DrawingMenu";
import DrawingMenu from "./components/DrawingMenu";
import { Route, Routes } from "react-router-dom";
import Result from "./components/Result";
import Canvas2 from "./components/Canvas2";
import Canvas3 from "./components/Canvas3";
let dragX, dragY, moveX, moveY;

function App() {
  return (
    <div>
      <ChakraProvider>
        <Nav />
        <DrawingMenu>
          <Sidebar />
          <div id="container2">
            <Canvas2 />
          </div>
        </DrawingMenu>
      </ChakraProvider>
    </div>
  );
}

export default App;
