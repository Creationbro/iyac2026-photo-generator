import Image from "next/image";
import UploadBox from "./components/UploadBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold text-yellow-400">
          IYAC 2026
        </h1>

        <h2 className="text-3xl mt-4 font-semibold">
          NEXT LEVELS
        </h2>

        <p className="mt-3 text-gray-300">
          International Youth Alive Convention
        </p>

        <p className="text-yellow-300 mt-2 text-lg">
          August 18 – 22, 2026
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button className="bg-blue-700 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold transition">
            🇬🇧 English
          </button>

          <button className="bg-red-700 hover:bg-red-600 px-8 py-3 rounded-xl font-semibold transition">
            🇫🇷 Français
          </button>

        </div>

      </section>

      {/* Flyers */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-center text-3xl font-bold mb-10">
          Choose Your Flyer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">

          {/* English Flyer */}
          <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/english-flyer.jpg"
              alt="English Flyer"
              width={350}
              height={525}
              loading="eager"
              className="rounded-2xl"
            />
          </div>

          {/* French Flyer */}
          <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/french-flyer.png"
              alt="French Flyer"
              width={350}
              height={525}
              className="rounded-2xl"
            />
          </div>

        </div>

      </section>

      {/* Upload Photo */}
      <UploadBox />

    </main>
  );
}