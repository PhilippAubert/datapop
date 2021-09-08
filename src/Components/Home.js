import React from "react";
import Sketch from "react-p5";
import "./CSS/Home.css";

export default function Home() {
  let x = 50;
  let y = 50;
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    let xyz = p5.createCanvas(350, 450).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };
  return (
    <div className="Main">
      <div className="Canvas">
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
}
