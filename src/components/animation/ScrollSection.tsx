"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textsRef = useRef<HTMLDivElement[]>([]);
  const t = useTranslations("Projects");
  const totalProjects = 3;
  const projectContents = Array.from({ length: totalProjects }, (_, i) => {
    const index = i + 1;
    return {
      title: t(`project_title_${index}`),
      subtitle: t(`project_subtitle_${index}`),
      front: t(`project_front_${index}`),
      back: t(`project_back_${index}`),
    };
  });

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.5, // ทำให้ smooth มากขึ้น ด้วย delay 1.5 วินาที
        pin: true,
      },
    });

    imagesRef.current.forEach((img, i) => {
      tl.fromTo(
        img,
        { autoAlpha: 0, scale: 0.95, y: 40, willChange: "transform, opacity" },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        i * 3
      ).to(
        img,
        {
          autoAlpha: 0,
          scale: 1.05,
          y: -40,
          duration: 1.8,
          ease: "power3.inOut",
          willChange: "transform, opacity",
        },
        (i + 1) * 3 - 1
      );
    });

    textsRef.current.forEach((txt, i) => {
      tl.fromTo(
        txt,
        { autoAlpha: 0, y: 40, rotateX: 8, willChange: "transform, opacity" },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        i * 3 + 0.3
      ).to(
        txt,
        {
          autoAlpha: 0,
          y: -30,
          rotateX: -8,
          duration: 1.8,
          ease: "power3.in",
          willChange: "transform, opacity",
        },
        (i + 1) * 3 - 1
      );
    });

    ScrollTrigger.refresh();
  }, []);

  const setImageRef = (el: HTMLDivElement | null, i: number) => {
    if (el) imagesRef.current[i] = el;
  };

  const setTextRef = (el: HTMLDivElement | null, i: number) => {
    if (el) textsRef.current[i] = el;
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="relative flex w-4/5 h-[70vh]">
        {/* รูปภาพซ้าย */}
        <div className="w-1/2 relative">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => setImageRef(el, i)}
              className="absolute top-0 left-0 w-full h-full opacity-0"
            >
              <Image
                src={`/images/image${i + 1}.jpg`}
                alt={`Image ${i}`}
                fill
                className="object-cover rounded-xl"
                style={{ willChange: "transform, opacity" }} // CSS inline เพิ่ม optimization
              />
            </div>
          ))}
        </div>

        {/* ข้อความขวา */}
        <div className="w-1/2 relative flex items-center justify-center pl-12">
          {projectContents.map((proj, i) => (
            <div
              key={i}
              ref={(el) => setTextRef(el, i)}
              className="absolute opacity-0 text-gray-800"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="text-3xl font-bold">{proj.title}</div>
              <div className="text-lg text-gray-600 mt-2">{proj.subtitle}</div>
              <div className="text-lg text-gray-600 mt-2">{proj.front}</div>
              <div className="text-lg text-gray-600 mt-2">{proj.back}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
