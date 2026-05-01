import { getApiStrategy, getLocalApiPort } from "./runtimeMode";

/**
 * Resolve a URL base da API de forma centralizada.
 * Em vez de espalhar endereços pelo app inteiro,
 * este arquivo vira a "agenda de contatos" oficial.
 */
export function getApiBaseUrl(): string | null {
  const fixedBase = process.env.EXPO_PUBLIC_API_BASE_URL?.trim();
  const remoteBase = process.env.EXPO_PUBLIC_REMOTE_API_URL?.trim();
  const strategy = getApiStrategy();
  const localPort = getLocalApiPort();

  if (fixedBase) {
    return fixedBase;
  }

  if (strategy === "offline") {
    return null;
  }

  if (strategy === "local-device") {
    return `http://127.0.0.1:${localPort}/api`;
  }

  if (strategy === "termux") {
    return `http://127.0.0.1:${localPort}/api`;
  }

  if (strategy === "remote-custom") {
    return remoteBase || null;
  }

  return null;
}

/**
 * Monta uma URL completa para um endpoint da API.
 */
export function buildApiUrl(path: string): string | null {
  const base = getApiBaseUrl();

  if (!base) {
    return null;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

/**
 * Informa se existe uma API ativa configurada.
 */
export function hasActiveApi(): boolean {
  return Boolean(getApiBaseUrl());
}