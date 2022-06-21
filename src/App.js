import { useEffect, useRef, useState } from "react";
import "../src/styles/style.css";
import Canvas from "./components/Canvas";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Sketch from "react-p5";
import "../src/styles/style2.css";
import DrawingMenu from "./components/DrawingMenu";

function App() {
  var state={
    drawState:"Line"
  }
  return (
    <div>
      <ChakraProvider>
        <Nav />
        <DrawingMenu />
        <Sidebar />
        <div id="container2">
          <Canvas drawState={state.drawState}/>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
