"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 420;

function createStars(width: number, height: number) {
  const stars: {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    color: string;
    glow: boolean;
  }[] = [];

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const roll = Math.random();
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: roll > 0.92 ? 1.4 : roll > 0.7 ? 1 : 0.6,
      opacity: 0.35 + Math.random() * 0.65,
      color:
        roll > 0.88
          ? "#FFE599"
          : roll > 0.82
            ? "#c8a2c8"
            : "#ffffff",
      glow: roll > 0.94,
    });
  }

  return stars;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars = createStars(window.innerWidth, window.innerHeight);

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: width, innerHeight: height } = window;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        if (star.glow) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle =
            star.color === "#FFE599"
              ? "rgba(255, 229, 153, 0.18)"
              : "rgba(255, 255, 255, 0.12)";
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          star.color === "#ffffff"
            ? `rgba(255, 255, 255, ${star.opacity})`
            : star.color === "#FFE599"
              ? `rgba(255, 229, 153, ${star.opacity})`
              : `rgba(200, 162, 200, ${star.opacity * 0.85})`;
        ctx.fill();
      }
    };

    const handleResize = () => {
      stars = createStars(window.innerWidth, window.innerHeight);
      draw();
    };

    draw();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="galaxy-stars-canvas" aria-hidden />;
}
