"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorGravity() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const easing = 0.15;

    const glow = glowRef.current!;
    gsap.set(glow, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    function animate() {
      currentX += (mouseX - currentX) * easing;
      currentY += (mouseY - currentY) * easing;

      gsap.set(glow, { x: currentX, y: currentY });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-28 w-28
                 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600
                 opacity-40 mix-blend-screen blur-2xl"
    />
  );
}
