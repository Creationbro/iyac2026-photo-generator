import { removeBackground } from "@imgly/background-removal";

export async function removeImageBackground(
  image: Blob
): Promise<string> {
  const result = await removeBackground(image);

  return await blobToBase64(result);
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    reader.onerror = reject;

    reader.readAsDataURL(blob);
  });
}