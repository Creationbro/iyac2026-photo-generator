"use client";

import Image from "next/image";
import { flyerLayout } from "../lib/layout";

type Language = "english" | "french";

interface FlyerCanvasProps {
  language: Language;
  fullName: string;
  photo: string | null;
}

export default function FlyerCanvas({
  language,
  fullName,
  photo,
}: FlyerCanvasProps) {
  const template =
    language === "english"
      ? "/images/english-template.png"
      : "/images/french-template.png";

  return (
    <div className="flex justify-center mt-10">
      <div
        id="flyer"
        className="relative w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-black"
      >
        {/* Flyer Template */}
        <Image
          src={template}
          alt="Template"
          fill
          priority
          sizes="420px"
        />

        {/* Uploaded Photo */}
        {photo && (
          <div
            className="absolute overflow-hidden"
            style={{
              left: flyerLayout.photo.left,
              top: flyerLayout.photo.top,
              width: flyerLayout.photo.width,
              height: flyerLayout.photo.height,
              transform: flyerLayout.photo.transform,
            }}
          >
            <img
              src={photo}
              alt="Participant"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        )}

        {/* Name */}
        {fullName && (
          <div
            className="absolute w-full text-center"
            style={{
              bottom: flyerLayout.name.bottom,
            }}
          >
            <h2
              style={{
                fontSize: flyerLayout.name.fontSize,
                fontWeight: "bold",
                color: "#fff",
                textShadow: "0 3px 10px rgba(0,0,0,.8)",
              }}
            >
              {fullName.toUpperCase()}
            </h2>

            <p
              style={{
                marginTop: "6px",
                color: "#FFD700",
                fontWeight: 700,
                fontSize: "18px",
                textShadow: "0 2px 8px rgba(0,0,0,.8)",
              }}
            >
              {language === "english"
                ? "I WILL BE THERE"
                : "JE SERAI LÀ"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}