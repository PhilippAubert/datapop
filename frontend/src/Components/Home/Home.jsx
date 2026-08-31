import React, { useEffect, useRef } from "react";
import Sketch from "react-p5";
import SimplexNoise from "simplex-noise";

import "./Home.css";

export const Home = () => {

  let minFrequency = 0.5;
  let maxFrequency = 4;
  let minAmplitude = 0.05;
  let maxAmplitude = 0.5;
  let canvasWidth = 375;
  let canvasHeight = 445;

  // canvasHeight IS window-height - header - footer 

  const canvasRef = useRef();

  useEffect(() => {
    const noiseWidth = canvasRef.current.getBoundingClientRect().width;
    const noiseTop = canvasRef.current.getBoundingClientRect().top;
    canvasHeight = window.innerHeight - (noiseTop * 2) - 15;
    canvasWidth = noiseWidth - 1;
  },[])

  // Included in index.html
  // This is an alternative to p5.js builtin 'noise' function,
  // It provides 4D noise and returns a value between -1 and 1

  const simplex = new SimplexNoise();

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    p5.mouseX = canvasWidth / 7;
    p5.mouseY = canvasHeight / 7;
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
    p5.stroke(255);
    p5.strokeWeight(dim * 0.0075);

    const time = p5.millis() / 1000;
    const rows = 220;

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
        time: time * 0.01,
        steps: 500,
        p5,
      });
    }
  };

  const drawNoiseLine = (opt = {}) => {
    const {
      v,
      start,
      end,
      steps = 1400,
      frequency = 5000,
      time = 1,
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
      const t = steps <= 1 ? 1.5 : i / (steps - 1);

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
    <div 
      ref={canvasRef}
      className="main">
        <Sketch setup={setup} draw={draw} />
    </div>
  );
}
