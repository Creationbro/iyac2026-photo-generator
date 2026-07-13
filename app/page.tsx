"use client";

import { useRef, useState } from "react";

import Header from "./components/Header";
import UserForm from "./components/UserForm";
import LanguageSelector from "./components/LanguageSelector";
import UploadBox from "./components/UploadBox";
import FlyerCanvas from "./components/FlyerCanvas";
import GenerateButton from "./components/GenerateButton";
import PhotoControls from "./components/PhotoControls";

import { downloadFlyer } from "./lib/download";

type Language = "english" | "french";

export default function Home() {
  const flyerRef = useRef<HTMLDivElement>(null);

  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>("english");

  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [church, setChurch] = useState("");

  const [photo, setPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Photo Controls
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleGenerate = async () => {
    if (!photo) {
      alert("Please upload your photo.");
      return;
    }

    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!flyerRef.current) return;

    setLoading(true);

    await downloadFlyer(
      flyerRef.current,
      `${fullName.replace(/\s+/g, "-")}-IYAC-2026.png`
    );

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <Header />

      {/* User Information */}
      <UserForm
        fullName={fullName}
        country={country}
        church={church}
        onFullNameChange={setFullName}
        onCountryChange={setCountry}
        onChurchChange={setChurch}
      />

      {/* Language */}
      <section className="mt-10">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
      </section>

      {/* Upload */}
      <UploadBox onImageUpload={setPhoto} />

      {/* Photo Controls */}
      {photo && (
        <PhotoControls
          scale={scale}
          setScale={setScale}
          offsetX={offsetX}
          setOffsetX={setOffsetX}
          offsetY={offsetY}
          setOffsetY={setOffsetY}
        />
      )}

      {/* Flyer Preview */}
      <section className="mt-10">
        <h2 className="text-center text-3xl font-bold mb-8">
          Flyer Preview
        </h2>

        <div
          ref={flyerRef}
          className="flex justify-center"
        >
          <FlyerCanvas
            language={selectedLanguage}
            fullName={fullName}
            photo={photo}
            scale={scale}
            offsetX={offsetX}
            offsetY={offsetY}
          />
        </div>
      </section>

      {/* Generate Button */}
      <GenerateButton
        onGenerate={handleGenerate}
        loading={loading}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-700 py-8 text-center text-gray-400">
        © 2026 WCI COTONOU BENIN REPUBLIC — IYAC 2026
      </footer>

    </main>
  );
}