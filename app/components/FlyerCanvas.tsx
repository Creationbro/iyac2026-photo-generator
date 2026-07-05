"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  image: string | null;
  fullName: string;
  selectedLanguage: "english" | "french";
};

export default function FlyerCanvas({
  image,
  fullName,
  selectedLanguage,
}: Props) {
  const canvasRef = useRef<HTMLDivElement>(null);

  const template =
    selectedLanguage === "english"
      ? "/images/english-template.png"
      : "/images/french-template.png";

  return (
    <div className="flex flex-col items-center mt-10">

      {/* 🖼️ Flyer Container */}
      <div
        ref={canvasRef}
        className="relative w-[350px] md:w-[500px] shadow-2xl rounded-xl overflow-hidden"
      >

        {/* Background Template */}
        <Image
          src={template}
          alt="Flyer Template"
          width={500}
          height={700}
          className="w-full h-auto"
        />

        {/* 👤 Participant Photo */}
        {image && (
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2">
            <Image
              src={image}
              alt="Participant"
              width={180}
              height={180}
              className="rounded-full border-4 border-white object-cover"
            />
          </div>
        )}

        {/* 📝 Name */}
        {fullName && (
          <div className="absolute bottom-10 w-full text-center">
            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
              {fullName}
            </h2>
          </div>
        )}

      </div>

      {/* Helper text */}
      <p className="text-gray-400 mt-4 text-sm text-center">
        Preview updates automatically when you upload image or enter name
      </p>

    </div>
  );
}