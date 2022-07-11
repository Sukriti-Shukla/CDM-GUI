import React from "react";
import "../styles/style2.css";
import Canvas from "./Canvas";
import CanvasContainer from "./CanvasContainer";
function InputContainer(props) {
  // const [input,setInput]=useState('');
  return (
    <div>
      <div class="inputContainer">
        <div class="input" id="colorInput">
          <input type="color" list id="paintColor" />
        </div>

        <div class="input" id="thicknessInput">
          <div id="circle"></div>
        </div>

        <div class="input">
          <div id="slider"></div>
        </div>
      </div>
      {/* <Canvas /> */}
    </div>
  );
}

export default InputContainer;
