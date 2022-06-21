import { React, Component } from "react";
import Sketch from "react-p5";
import p5 from "p5";
import "../styles/style2.css";

// function Canvas() {
//   const [isDrawing, setDrawing] = useState(true);
//   const [drawing, addDrawing] = useState([]);
//   const [currentPath, setPath] = useState([]);
//   const [width, setWidth] = useState(600);
//   const [height, setHeight] = useState(600);
//   const [color, setColor] =useState([255,255,255]);
//   const [weight,setWeight] = useState(4);

//   const setup = (p5, canvasParentRef) => {
//     p5.canvas = p5.createCanvas({ width }, { height }).parent(canvasParentRef);
//     p5.canvas.mousePressed(startPath);
//     p5.canvas.mouseReleased(endPath);
//   };

//   const startPath = () => {
//     setDrawing(false);
//     setPath([]);
//     addDrawing([...drawing, { currentPath }]);
//   };
//   const endPath = () => {
//     setDrawing(false);
//   };
//   const draw = (p5) => {
//     p5.background(255, 130, 20);
//     //p5.ellipse(200.0, 100.5, 100.1);
//     //p5.ellipse(300, 100, 100);
//     p5.noStroke();
//     p5.fill(255);
//     p5.rect(0, 0, p5.width / 6, 50);

//     p5.fill(0, 255, 0);
//     p5.rect(p5.width / 6, 0, p5.width / 6, 50);

//     p5.fill(0, 0, 255);
//     p5.rect(p5.width / 3, 0, p5.width / 6, 50);

//     p5.fill(255, 0, 0);
//     p5.rect(p5.width / 2, 0, p5.width / 6, 50);

//     p5.fill(255, 234, 0);
//     p5.rect((2 * p5.width) / 3, 0, p5.width / 6, 50);

//     p5.fill(0);
//     p5.rect((5 * p5.width) / 6, 0, p5.width / 6, 50);

//     p5.fill(50);
//     p5.rect(0, 50, p5.width, 5);

//     if({isDrawing}){
//       let point = {
//         x: p5.mouseX,
//         y: p5.mouseY,
//         clr: {color},
//         weight: {weight}
//     };
//     setPath([...currentPath,[point]])
//     }
//   };

//   return (
//     <div id="container2">
//       <Sketch setup={setup} draw={draw} />
//     </div>
//   );
// }

// export default Canvas;
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [255, 255, 255, 255],
      weight: 4,
    };
    this.myRef = React.createRef();
  }

  drawing = [];
  currentPath = [];
  isDrawing = false;

  width = 600;
  height = 600;

  sketch = (p) => {
    /* let drawing = [];
      let currentPath = [];
      let isDrawing = false; */

    p.disableFriendlyErrors = true;

    p.setup = () => {
      p.canvas = p.createCanvas(this.width, this.height);
      p.frameRate(25);
      p.canvas.mousePressed(startPath);
      p.canvas.mouseReleased(endPath);
    };

    const startPath = () => {
      this.isDrawing = true;
      this.currentPath = [];
      this.drawing.push(this.currentPath);
    };

    const endPath = () => {
      this.isDrawing = false;
    };

    p.draw = () => {
      p.background(0);
      p.noStroke();
      p.fill(255);
      p.rect(0, 0, p.width / 6, 50);

      p.fill(0, 255, 0);
      p.rect(p.width / 6, 0, p.width / 6, 50);

      p.fill(0, 0, 255);
      p.rect(p.width / 3, 0, p.width / 6, 50);

      p.fill(255, 0, 0);
      p.rect(p.width / 2, 0, p.width / 6, 50);

      p.fill(255, 234, 0);
      p.rect((2 * p.width) / 3, 0, p.width / 6, 50);

      p.fill(0);
      p.rect((5 * p.width) / 6, 0, p.width / 6, 50);

      p.fill(50);
      p.rect(0, 50, p.width, 5);

      if (this.isDrawing) {
        let point = {
          x: p.mouseX,
          y: p.mouseY,
          clr: this.state.color,
          weight: this.state.weight,
        };

        this.currentPath.push(point);
        this.props.socket.emit("draw", { path: [...this.currentPath] });
      }

      p.mousePressed = () => {
        if (p.mouseY < 50) {
          let weight = p.mouseX > (5 * p.width) / 6 ? 25 : 4;

          this.setState({ color: p.get(p.mouseX, p.mouseY), weight });
        }
      };

      if (p.mouseY > 50) {
        p.cursor(p.CROSS);
      } else {
        p.cursor("pointer");
      }

      for (var i = 0; i < this.drawing.length; i++) {
        var path = this.drawing[i];
        p.beginShape();
        for (var j = 0; j < path.length; j++) {
          //shape params
          p.stroke(path[j].clr);
          p.strokeWeight(path[j].weight);
          p.noFill();

          //vertex
          p.vertex(path[j].x, path[j].y);
        }
        p.endShape();
      }
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.myRef.current);
    this.props.socket.on(
      "draw-back",
      (data) => {
        this.drawing.push(data.path);
      },
      []
    );
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default Canvas;
