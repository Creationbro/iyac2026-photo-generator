"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { removeImageBackground } from "../lib/removeBackground";

interface UploadBoxProps {
  onImageUpload: (image: string) => void;
}

export default function UploadBox({
  onImageUpload,
}: UploadBoxProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      try {
        setLoading(true);

        // Remove background
        const imageWithoutBackground = await removeImageBackground(file);

        setPreview(imageWithoutBackground);
        onImageUpload(imageWithoutBackground);
      } catch (error) {
        console.error(error);
        alert("Failed to remove background.");

        // Fallback to original image
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result as string;
          setPreview(base64);
          onImageUpload(base64);
        };

        reader.readAsDataURL(file);
      } finally {
        setLoading(false);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div className="mt-16 max-w-md mx-auto px-6 pb-10">

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-yellow-400 rounded-2xl p-8 text-center cursor-pointer bg-slate-900 hover:bg-slate-800 transition"
      >
        <input {...getInputProps()} />

        {loading ? (
          <>
            <p className="text-yellow-400 text-xl font-bold">
              Removing Background...
            </p>

            <p className="text-gray-400 mt-2">
              Please wait...
            </p>
          </>
        ) : isDragActive ? (
          <p className="text-yellow-400 font-semibold">
            Drop your photo here...
          </p>
        ) : (
          <>
            <p className="text-5xl mb-4">📷</p>

            <p className="text-xl font-bold">
              Upload Your Photo
            </p>

            <p className="text-gray-400 mt-2">
              Click or drag &amp; drop
            </p>
          </>
        )}
      </div>

      {preview && (
        <div className="mt-8 flex justify-center">
          <Image
            src={preview}
            alt="Preview"
            width={220}
            height={280}
            className="rounded-xl object-cover shadow-xl"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}