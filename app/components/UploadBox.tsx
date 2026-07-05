"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

type Props = {
  onImageUpload: (file: string) => void;
  preview: string | null;
};

export default function UploadBox({ onImageUpload, preview }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onImageUpload(imageUrl);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop,
  });

  return (
    <div className="mt-16 max-w-md mx-auto px-6 pb-20">

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-yellow-400 rounded-2xl p-8 text-center cursor-pointer bg-slate-900 hover:bg-slate-800 transition"
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p className="text-yellow-400 font-semibold">
            Drop your photo here...
          </p>
        ) : (
          <>
            <p className="text-5xl mb-4">📷</p>
            <p className="text-xl font-bold">Upload Your Photo</p>
            <p className="text-gray-400 mt-2">
              Click or drag & drop
            </p>
          </>
        )}
      </div>

      {preview && (
        <div className="mt-8 flex justify-center">
          <Image
            src={preview}
            alt="Preview"
            width={250}
            height={250}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      )}
    </div>
  );
}