import React, { 
  useEffect, 
  useRef, 
  useState } 
from "react";

import Sketch from "react-p5";
import SimplexNoise from "simplex-noise";

import "./Home.css";

export const Home = () => {
  const minFrequency = 0.5;
  const maxFrequency = 2;
  const minAmplitude = 0.05;
  const maxAmplitude = 0.5;

  const [dimensions, setDimensions] = useState(null);
  const canvasRef = useRef(null);
  
  const simplexRef = useRef(new SimplexNoise());

  useEffect(() => {
    if (canvasRef.current) {
      const calculatedWidth = canvasRef.current.clientWidth;
      const calculatedHeight = canvasRef.current.clientHeight;
      console.log("Calculated Height", calculatedHeight);
      setDimensions({ width: calculatedWidth, height: calculatedHeight });
  }
}, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef);

    p5.mouseX = dimensions.width / 7;
    p5.mouseY = dimensions.height / 7;
  };

  const draw = (p5) => {
    p5.background(0);

    const frequency = p5.lerp(
      minFrequency,
      maxFrequency,
      p5.mouseX / dimensions.width
    );
    const amplitude = p5.lerp(
      minAmplitude,
      maxAmplitude,
      p5.mouseY / dimensions.height
    );

    const dim = Math.min(dimensions.width, dimensions.height);

    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(dim * 0.0075);

    const time = p5.millis() / 1000;
    const rows = 150;

    for (let y = 0; y < rows; y++) {
      const v = rows <= 1 ? 0.5 : y / (rows - 1);
      const py = v * dimensions.height;
      drawNoiseLine({
        v,
        start: [0, py],
        end: [dimensions.width, py],
        amplitude: amplitude * dimensions.height,
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

    p5.beginShape();
    for (let i = 0; i < steps; i++) {
      const t = steps <= 1 ? 1.5 : i / (steps - 1);
      const x = p5.lerp(xStart, xEnd, t);
      let y = p5.lerp(yStart, yEnd, t);

      y += simplexRef.current.noise3D(t * frequency + time, v * frequency, time) * amplitude;

      p5.vertex(x, y);
    }
    p5.endShape();
  };

  return (
    <div ref={canvasRef} className="main">
      {dimensions && <Sketch setup={setup} draw={draw} />}
    </div>
  );
};
