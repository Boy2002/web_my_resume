"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { CardData } from "@/components/card/card_intro_self";

export default function MainPage() {
  const t = useTranslations("HomePage");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const whoDetails = [t("whodetail1"), t("whodetail2")];

  return (
    <div className="pt-19">
      <div className="relative flex items-center justify-center h-158 w-full p-30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
          style={{
            backgroundImage: "url('/images/galaxy.jpg')",
          }}
        />

        <div className="flex flex-col justify-center items-center z-10 font-bold font-kanit">
          <p className="text-6xl text-white">{t("hi")}</p>
          <p className="text-6xl text-white">{t("title")}</p>
        </div>

        <Image
          src="/icons_dev/js_logo.svg"
          alt="JavaScript"
          width={50}
          height={50}
          className="absolute top-28 left-102 rotate-[10deg] animate-float shadow-md z-10"
        />
        <Image
          src="/icons_dev/ts_logo.svg"
          alt="TypeScript"
          width={50}
          height={50}
          className="absolute top-20 right-106 rotate-[-12deg] animate-float-slow shadow-lg z-10"
        />
        <Image
          src="/icons_dev/java_logo.svg"
          alt="Java"
          width={80}
          height={80}
          className="absolute bottom-20 left-1/4 rotate-[15deg] animate-float shadow-sm z-10"
        />
        <Image
          src="/icons_dev/html_logo.svg"
          alt="Html"
          width={50}
          height={50}
          className="absolute bottom-24 right-[30%] rotate-[5deg] animate-float-slow shadow-md z-10"
        />

        <div className="absolute bottom-0 flex justify-center w-full z-10">
          <div className="animate-bounce text-white opacity-60">
            <FaChevronDown size={28} className="drop-shadow-md" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[700px] bg-white overflow-hidden">
        <Image
          src="/images/silhouette.png"
          alt="My silhouette"
          fill
          className="absolute object-cover opacity-15 contrast-125 brightness-75"
        />

        <div
          ref={ref}
          className={clsx(
            "absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 md:px-24 transition-opacity duration-5000 ease-in-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="font-bold text-5xl md:text-6xl text-black">
            {t("who")}
          </p>

          <div className="pt-6 space-y-2 text-lg md:text-2xl text-gray-900">
            {whoDetails.map((line, index) => (
              <p key={index} className="opacity-90 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px] bg-white overflow-hidden">
        <CardData></CardData>
      </div>
    </div>
  );
}
