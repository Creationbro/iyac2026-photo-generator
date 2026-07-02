"use client";

import Image from "next/image";

type Language = "english" | "french";

interface FlyerPreviewProps {
  selectedLanguage: Language;
}

export default function FlyerPreview({
  selectedLanguage,
}: FlyerPreviewProps) {
  return (
    <div className="flex justify-center mt-10">

      <Image
        src={
          selectedLanguage === "english"
            ? "/images/english-flyer.jpg"
            : "/images/french-flyer.png"
        }
        alt="Flyer Preview"
        width={350}
        height={525}
        className="rounded-2xl shadow-2xl"
        loading="eager"
      />

    </div>
  );
}