import Image from "next/image";
import SplitTexts from "@/components/animation/SplitText";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Text Layer */}
        <SplitTexts delay={0.5}>
          <div className="absolute top-30 left-40  z-10">
            <p className="text-6xl font-light text-[#222222] leading-tight">
              ผมชื่อบอย
            </p>

            <p className="text-6xl font-light text-[#6E6E73] leading-tight">
              วันชัย ยวงขาว
            </p>
          </div>
          <div className="absolute top-80 right-40 z-10">
            <p className="text-5xl font-light text-[#222222] leading-tight w-64">
              ผมเป็นคนที่มีความตั้งใจในการเรียนรู้สิ่งใหม่ๆ
            </p>
          </div>
        </SplitTexts>
        {/* Image Layer */}
        <Image
          src="/images/mypic.jpg"
          alt="mypic"
          width={300}
          height={300}
          className="absolute top-60 left-1/2 -translate-x-1/2 rounded-xl shadow-lg z-0"
        />
      </div>
      <div>
        <p>การศึกษา</p>
        <p>การศึกษา</p>
      </div>
    </div>
  );
}
