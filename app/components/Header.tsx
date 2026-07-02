import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white py-10 px-6">

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-6">

          <Image
            src="/images/winners-logo.png"
            alt="Winners Chapel"
            width={90}
            height={90}
            priority
          />

          <Image
            src="/images/iyac-logo.png"
            alt="IYAC 2026"
            width={110}
            height={110}
            priority
          />

        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 text-center">
          IYAC 2026
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mt-3 text-center">
          NEXT LEVELS
        </h2>

        <p className="text-gray-300 mt-4 text-center text-lg">
          International Youth Alive Convention
        </p>

        <p className="text-yellow-300 font-semibold mt-2 text-center">
          August 18 – 22, 2026
        </p>

      </div>

    </header>
  );
}