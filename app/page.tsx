import Image from "next/image";
import Header from "./components/Header";
import UploadBox from "./components/UploadBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <Header />

      {/* Language Buttons */}
      <section className="py-8">
        <div className="flex justify-center gap-4 flex-wrap">

          <button className="bg-blue-700 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold transition">
            🇬🇧 English
          </button>

          <button className="bg-red-700 hover:bg-red-600 px-8 py-3 rounded-xl font-semibold transition">
            🇫🇷 Français
          </button>

        </div>
      </section>

      {/* Upload */}
      <UploadBox />

      {/* Flyer */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-8">
          Official AYAC Flyer
        </h2>

        <div className="flex justify-center">

          <Image
            src="/images/english-flyer.jpg"
            alt="IYAC Flyer"
            width={350}
            height={525}
            loading="eager"
            className="rounded-2xl shadow-2xl"
          />

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">
        © 2026 WCI Cotonou Benin Republic— AYAC 2026
      </footer>

    </main>
  );
}