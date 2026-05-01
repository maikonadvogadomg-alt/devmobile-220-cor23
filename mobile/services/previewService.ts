import { getApiStrategy, getLocalPreviewPort } from "./runtimeMode";

/**
 * Indica se o preview local de HTML deve funcionar sem backend.
 */
export function canUseInlineHtmlPreview(): boolean {
  return true;
}

/**
 * Retorna a URL do preview de servidor, quando houver um serviço local/remoto.
 */
export function getServerPreviewUrl(): string | null {
  const strategy = getApiStrategy();
  const previewPort = getLocalPreviewPort();

  if (strategy === "local-device" || strategy === "termux") {
    return `http://127.0.0.1:${previewPort}`;
  }

  if (strategy === "remote-custom") {
    return null;
  }

  return null;
}