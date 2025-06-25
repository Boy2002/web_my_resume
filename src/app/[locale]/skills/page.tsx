"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FallingDivs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const divRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    divRefs.current.forEach((div, i) => {
      if (!div) return; // ป้องกัน div เป็น null

      const startX = i % 2 === 0 ? 100 : 300;
      const startY = -100;

      gsap.fromTo(
        div,
        { x: startX, y: startY, opacity: 0 },
        {
          y: 300,
          opacity: 1,
          duration: 1.5,
          delay: i * 0.3,
          ease: "bounce.out",
          onComplete: () => {
            gsap.to(div, {
              x: 200,
              y: 200,
              duration: 1,
              ease: "elastic.out(1, 0.3)",
            });
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: 400,
        width: 400,
        border: "1px solid #ccc",
        margin: "auto",
      }}
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            divRefs.current[i] = el;
          }}
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            backgroundColor: "tomato",
            borderRadius: 8,
            color: "white",
            textAlign: "center",
            lineHeight: "80px",
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          {`Box ${i + 1}`}
        </div>
      ))}
    </div>
  );
}
