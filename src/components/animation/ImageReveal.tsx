// components/ImageReveal.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // ใช้ div ล้อม Image แทน ref ตรงกับ <Image>

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center h-[500px] bg-gray-100"
    >
      <div ref={imageRef}>
        <Image
          src="/images/image1.jpg"
          alt="Scroll In"
          width={300}
          height={200}
          className="object-cover"
        />
      </div>
    </div>
  );
}
