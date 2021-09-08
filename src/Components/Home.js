import React from "react";
import Sketch from "react-p5";
import SimplexNoise from "simplex-noise";
import "./CSS/Home.css";

export default function Home() {
  let x = 50;
  let y = 50;

  let dragging = false;
  let minFrequency = 0.5;
  let maxFrequency = 2;
  let minAmplitude = 0.05;
  let maxAmplitude = 0.5;
  const canvasWidth = 380;
  const canvasHeight = 520;

  let amplitude;
  let frequency;

  // Included in index.html
  // This is an alternative to p5.js builtin 'noise' function,
  // It provides 4D noise and returns a value between -1 and 1

  const simplex = new SimplexNoise();

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    p5.mouseX = 500 / 2;
    p5.mouseY = 500 / 2;

    /*     let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y); */
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
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
