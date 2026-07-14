"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="inline-block bg-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full font-semibold mb-6">
          INTERNATIONAL YOUTH ALIVE CONVENTION 2026
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          NEXT LEVELS
        </h1>

        <p className="text-2xl text-yellow-400 font-semibold mt-4">
          Create Your Personalized Convention Flyer
        </p>

        <p className="text-gray-300 max-w-2xl mx-auto mt-8 text-lg leading-8">
          Upload your picture, enter your name, and instantly generate
          your official IYAC 2026 flyer in English or French.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <div className="bg-slate-800 rounded-xl px-6 py-4">
            <p className="text-3xl">📷</p>
            <p className="mt-2 font-semibold">Upload Photo</p>
          </div>

          <div className="bg-slate-800 rounded-xl px-6 py-4">
            <p className="text-3xl">✨</p>
            <p className="mt-2 font-semibold">Generate Flyer</p>
          </div>

          <div className="bg-slate-800 rounded-xl px-6 py-4">
            <p className="text-3xl">⬇️</p>
            <p className="mt-2 font-semibold">Download HD</p>
          </div>

        </div>

      </div>

    </section>
  );
}