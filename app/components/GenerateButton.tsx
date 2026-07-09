"use client";

interface GenerateButtonProps {
  onGenerate: () => void;
  loading?: boolean;
}

export default function GenerateButton({
  onGenerate,
  loading = false,
}: GenerateButtonProps) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={onGenerate}
        disabled={loading}
        className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-700 disabled:cursor-not-allowed text-black font-bold px-10 py-4 rounded-xl text-lg transition shadow-lg"
      >
        {loading ? "Generating..." : "⬇ Download My Flyer"}
      </button>
    </div>
  );
}