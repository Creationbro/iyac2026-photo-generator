"use client";

import { flyerLayout } from "../lib/flyerLayout";

type Language = "english" | "french";

interface FlyerCanvasProps {
  language: Language;
  fullName: string;
  photo: string | null;

  scale: number;
  offsetX: number;
  offsetY: number;
}

export default function FlyerCanvas({
  language,
  fullName,
  photo,
  scale,
  offsetX,
  offsetY,
}: FlyerCanvasProps) {
  const template =
    language === "english"
      ? "/images/english-template.png"
      : "/images/french-template.png";

  return (
    <div className="flex justify-center mt-10">
      <div
        id="flyer"
        className="relative w-[420px] aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-black"
      >
        {/* Background */}
        <img
          src={template}
          alt="Flyer Template"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Participant Photo */}
        {photo && (
          <div
            className="absolute"
            style={{
              left: flyerLayout.photo.left,
              bottom: flyerLayout.photo.bottom,
              width: flyerLayout.photo.width,
              height: flyerLayout.photo.height,
              transform: `translateX(-50%) translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
              transformOrigin: "center bottom",
            }}
          >
            <img
              src={photo}
              alt="Participant"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        )}

        {/* Name */}
        {fullName && (
          <div
            className="absolute font-bold text-white"
            style={{
              right: flyerLayout.name.right,
              bottom: flyerLayout.name.bottom,
              fontSize: flyerLayout.name.fontSize,
              textAlign: flyerLayout.name.textAlign as
                | "left"
                | "center"
                | "right",
              textShadow: "2px 2px 8px rgba(0,0,0,.9)",
              maxWidth: "180px",
            }}
          >
            {fullName.toUpperCase()}
          </div>
        )}

        {/* Tagline */}
        {fullName && (
          <div
            className="absolute font-bold text-yellow-400"
            style={{
              right: flyerLayout.tagline.right,
              bottom: flyerLayout.tagline.bottom,
              fontSize: flyerLayout.tagline.fontSize,
              textAlign: flyerLayout.tagline.textAlign as
                | "left"
                | "center"
                | "right",
              textShadow: "2px 2px 6px rgba(0,0,0,.9)",
              maxWidth: "180px",
            }}
          >
            {language === "english"
              ? "I WILL BE THERE"
              : "JE SERAI LÀ"}
          </div>
        )}
      </div>
    </div>
  );
}