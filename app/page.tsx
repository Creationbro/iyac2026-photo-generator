"use client";

import { useState } from "react";

import Header from "./components/Header";
import UserForm from "./components/UserForm";
import LanguageSelector from "./components/LanguageSelector";
import UploadBox from "./components/UploadBox";
import FlyerCanvas from "./components/FlyerCanvas";
import GenerateButton from "./components/GenerateButton";

type Language = "english" | "french";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>("english");

  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [church, setChurch] = useState("");

  const [image, setImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!country.trim()) {
      alert("Please enter your country.");
      return;
    }

    if (!image) {
      alert("Please upload your photo.");
      return;
    }

    alert("Flyer generated successfully!");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <Header />

      {/* User Form */}
      <UserForm
        fullName={fullName}
        country={country}
        church={church}
        onFullNameChange={setFullName}
        onCountryChange={setCountry}
        onChurchChange={setChurch}
      />

      {/* Language Selector */}
      <section className="mt-10">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
      </section>

      {/* Upload Box */}
      <UploadBox
        preview={image}
        onImageUpload={setImage}
      />

      {/* Flyer Canvas */}
      <section className="mt-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">
          Flyer Preview
        </h2>

        <FlyerCanvas
          image={image}
          fullName={fullName}
          selectedLanguage={selectedLanguage}
        />
      </section>

      {/* Generate Button */}
      <GenerateButton
        onGenerate={handleGenerate}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-700 py-8 text-center text-gray-400">
        © 2026 WCI COTONOU BENIN REPUBLIC — IYAC 2026
      </footer>

    </main>
  );
}