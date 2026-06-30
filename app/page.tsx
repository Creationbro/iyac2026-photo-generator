export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-slate-800 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-5xl font-bold text-center text-yellow-400">
          IYAC 2026
        </h1>

        <p className="text-center mt-3 text-2xl">
          NEXT LEVELS
        </p>

        <p className="text-center mt-2 text-gray-300">
          Annual Youth Alive Convention
        </p>

        <p className="text-center mt-6">
          Choose your language
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl">
            🇬🇧 English
          </button>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl">
            🇫🇷 Français
          </button>

        </div>

        <div className="mt-12 text-center">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-xl">
            Generate My Flyer
          </button>

        </div>

      </div>
    </main>
  );
}