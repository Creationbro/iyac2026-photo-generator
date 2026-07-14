"use client";

import { useRef, useState } from "react";

import Header from "./components/Header";
import UserForm from "./components/UserForm";
import LanguageSelector from "./components/LanguageSelector";
import UploadBox from "./components/UploadBox";
import FlyerCanvas from "./components/FlyerCanvas";
import GenerateButton from "./components/GenerateButton";

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
  const [message, setMessage] = useState("");

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

    try {
      setLoading(true);
      setMessage("⏳ Generating your flyer...");

      await downloadFlyer(
        flyerRef.current,
        `${fullName.replace(/\s+/g, "-")}-IYAC-2026.png`
      );

      setMessage("✅ Flyer downloaded successfully!");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to download flyer.");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Header />

      <UserForm
        fullName={fullName}
        country={country}
        church={church}
        onFullNameChange={setFullName}
        onCountryChange={setCountry}
        onChurchChange={setChurch}
      />

      <section className="mt-10">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
      </section>

      <UploadBox onImageUpload={setPhoto} />

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
          />
        </div>
      </section>

      {message && (
        <div className="mt-6 flex justify-center">
          <div
            className={`px-6 py-3 rounded-lg font-semibold text-center shadow-lg ${
              message.startsWith("✅")
                ? "bg-green-600 text-white"
                : message.startsWith("❌")
                ? "bg-red-600 text-white"
                : "bg-yellow-500 text-black"
            }`}
          >
            {message}
          </div>
        </div>
      )}

      <GenerateButton
        onGenerate={handleGenerate}
        loading={loading}
      />

      <footer className="mt-16 border-t border-slate-700 py-8 text-center text-gray-400">
        © 2026 WCI COTONOU BENIN REPUBLIC — IYAC 2026
      </footer>

    </main>
  );
}