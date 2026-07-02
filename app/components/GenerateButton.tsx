"use client";

interface GenerateButtonProps {
  onGenerate: () => void;
}

export default function GenerateButton({
  onGenerate,
}: GenerateButtonProps) {
  return (
    <div className="flex justify-center mt-10">

      <button
        onClick={onGenerate}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition shadow-lg"
      >
        ✨ Generate My IYAC Flyer
      </button>

    </div>
  );
}