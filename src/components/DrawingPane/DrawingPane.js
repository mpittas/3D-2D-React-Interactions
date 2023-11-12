"use client";
import React, { useRef, useEffect } from "react";
import _ from "lodash";

const DrawingPane = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    updateCanvasSize(canvas);

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function draw(e) {
      if (!isDrawing) return;
      context.strokeStyle = "white";
      context.lineWidth = 60;
      context.lineJoin = "round";
      context.lineCap = "round";
      context.globalCompositeOperation = "source-out";
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    const throttledDraw = _.throttle(draw, 10);

    canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
      draw(e);
    });

    canvas.addEventListener("mousemove", throttledDraw);
    canvas.addEventListener("mouseup", () => {
      isDrawing = false;
      setTimeout(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, 2000);
    });
    canvas.addEventListener("mouseout", () => {
      isDrawing = false;
      setTimeout(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
    });

    // Update canvas size on window resize
    function updateCanvasSize(canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", () => {
      updateCanvasSize(canvas);
    });
  }, []);

  return <canvas className="relative z-[2]" ref={canvasRef} />;
};

export default DrawingPane;
