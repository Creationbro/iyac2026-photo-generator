"use client";

type Language = "english" | "french";

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onSelect: (language: Language) => void;
}

export default function LanguageSelector({
  selectedLanguage,
  onSelect,
}: LanguageSelectorProps) {
  return (
    <div className="flex justify-center gap-4 flex-wrap">

      <button
        onClick={() => onSelect("english")}
        className={`px-8 py-3 rounded-xl font-semibold transition ${
          selectedLanguage === "english"
            ? "bg-blue-700 text-white"
            : "bg-slate-700 hover:bg-slate-600"
        }`}
      >
        🇬🇧 English
      </button>

      <button
        onClick={() => onSelect("french")}
        className={`px-8 py-3 rounded-xl font-semibold transition ${
          selectedLanguage === "french"
            ? "bg-red-700 text-white"
            : "bg-slate-700 hover:bg-slate-600"
        }`}
      >
        🇫🇷 Français
      </button>

    </div>
  );
}