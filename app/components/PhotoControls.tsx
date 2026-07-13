"use client";

import * as Slider from "@radix-ui/react-slider";

interface PhotoControlsProps {
  scale: number;
  setScale: (value: number) => void;

  offsetX: number;
  setOffsetX: (value: number) => void;

  offsetY: number;
  setOffsetY: (value: number) => void;
}

export default function PhotoControls({
  scale,
  setScale,
  offsetX,
  setOffsetX,
  offsetY,
  setOffsetY,
}: PhotoControlsProps) {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-slate-900 rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-center mb-6">
        📷 Photo Controls
      </h2>

      {/* Zoom */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">
          Zoom ({scale.toFixed(1)}x)
        </label>

        <Slider.Root
          className="relative flex items-center select-none touch-none h-5"
          value={[scale]}
          min={0.5}
          max={2}
          step={0.05}
          onValueChange={(value) => setScale(value[0])}
        >
          <Slider.Track className="bg-slate-700 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-yellow-400 rounded-full h-full" />
          </Slider.Track>

          <Slider.Thumb className="block w-5 h-5 bg-yellow-400 rounded-full shadow-lg cursor-pointer" />
        </Slider.Root>
      </div>

      {/* Left / Right */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">
          Move Left / Right
        </label>

        <Slider.Root
          className="relative flex items-center select-none touch-none h-5"
          value={[offsetX]}
          min={-100}
          max={100}
          step={1}
          onValueChange={(value) => setOffsetX(value[0])}
        >
          <Slider.Track className="bg-slate-700 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-yellow-400 rounded-full h-full" />
          </Slider.Track>

          <Slider.Thumb className="block w-5 h-5 bg-yellow-400 rounded-full shadow-lg cursor-pointer" />
        </Slider.Root>
      </div>

      {/* Up / Down */}
      <div>
        <label className="block mb-2 font-semibold">
          Move Up / Down
        </label>

        <Slider.Root
          className="relative flex items-center select-none touch-none h-5"
          value={[offsetY]}
          min={-100}
          max={100}
          step={1}
          onValueChange={(value) => setOffsetY(value[0])}
        >
          <Slider.Track className="bg-slate-700 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-yellow-400 rounded-full h-full" />
          </Slider.Track>

          <Slider.Thumb className="block w-5 h-5 bg-yellow-400 rounded-full shadow-lg cursor-pointer" />
        </Slider.Root>
      </div>

    </div>
  );
}