import React from "react";
import Sketch from "react-p5";
import SimplexNoise from "simplex-noise";
import "./CSS/Home.css";

export default function Home() {
  let minFrequency = 0.5;
  let maxFrequency = 2;
  let minAmplitude = 0.05;
  let maxAmplitude = 0.5;
  const canvasWidth = 365;
  const canvasHeight = 460;

  // Included in index.html
  // This is an alternative to p5.js builtin 'noise' function,
  // It provides 4D noise and returns a value between -1 and 1

  const simplex = new SimplexNoise();

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    p5.mouseX = canvasWidth / 4;
    p5.mouseY = canvasHeight / 4;

    /*     let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y); */
  };

  const draw = (p5) => {
    p5.background(0);

    const frequency = p5.lerp(
      minFrequency,
      maxFrequency,
      p5.mouseX / canvasWidth
    );
    const amplitude = p5.lerp(
      minAmplitude,
      maxAmplitude,
      p5.mouseY / canvasHeight
    );

    const dim = Math.min(canvasWidth, canvasHeight);

    // Draw the background
    p5.noFill();
    p5.stroke(355);
    p5.strokeWeight(dim * 0.0075);

    const time = p5.millis() / 1900;
    const rows = 100;

    // Draw each line
    for (let y = 0; y < rows; y++) {
      // Determine the Y position of the line
      const v = rows <= 1 ? 0.5 : y / (rows - 1);
      const py = v * canvasHeight;
      drawNoiseLine({
        v,
        start: [0, py],
        end: [canvasWidth, py],
        amplitude: amplitude * canvasHeight,
        frequency,
        time: time * 0.1,
        steps: 100,
        p5,
      });
    }
  };

  const drawNoiseLine = (opt = {}) => {
    const {
      v,
      start,
      end,
      steps = 200,
      frequency = 10000,
      time = 10,
      amplitude = 0.1,
      p5,
    } = opt;

    const [xStart, yStart] = start;
    const [xEnd, yEnd] = end;

    // Create a line by walking N steps and interpolating
    // from start to end point at each interval
    p5.beginShape();
    for (let i = 0; i < steps; i++) {
      // Get interpolation factor between 0..1
      const t = steps <= 1 ? 0.5 : i / (steps - 1);

      // Interpolate X position
      const x = p5.lerp(xStart, xEnd, t);

      // Interpolate Y position
      let y = p5.lerp(yStart, yEnd, t);

      // Offset Y position by noise
      y +=
        simplex.noise3D(t * frequency + time, v * frequency, time) * amplitude;

      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
  };

  return (
    <div className="Main">
      <div className="Canvas">
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
}
