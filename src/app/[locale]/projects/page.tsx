"use client";

import ImageReveal from "@/components/animation/ImageReveal";
import ScrollSection from "@/components/animation/ScrollSection";
import { useTranslations } from "next-intl";
import React from "react";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <main>
      <div className="h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl">{t("projectheader")}</h1>
      </div>
      <ScrollSection />
      <div className="h-screen bg-white">
        <ImageReveal />
      </div>
    </main>
  );
}
