import { toPng } from "html-to-image";

export async function downloadFlyer(
  element: HTMLElement,
  filename: string
) {
  try {
    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 3,
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Download failed:", error);
    alert("Unable to download flyer.");
  }
}