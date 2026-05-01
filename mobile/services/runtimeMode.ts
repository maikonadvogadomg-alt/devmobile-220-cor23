export type AppRuntimeMode = "offline" | "local" | "termux" | "remote" | "hybrid";
export type ApiStrategy = "offline" | "local-device" | "termux" | "remote-custom";

function readBool(value: string | undefined, fallback = false) {
  if (typeof value !== "string") return fallback;
  return value.toLowerCase() === "true";
}

/**
 * Retorna o modo principal configurado para o app.
 * Pense nisso como a "marcha" atual do carro:
 * offline, local, termux, remoto ou híbrido.
 */
export function getAppRuntimeMode(): AppRuntimeMode {
  const mode = process.env.EXPO_PUBLIC_APP_MODE;

  if (
    mode === "offline" ||
    mode === "local" ||
    mode === "termux" ||
    mode === "remote" ||
    mode === "hybrid"
  ) {
    return mode;
  }

  return "local";
}

/**
 * Retorna a estratégia de API configurada.
 * É o caminho que o app tenta usar para falar com um backend, se houver.
 */
export function getApiStrategy(): ApiStrategy {
  const strategy = process.env.EXPO_PUBLIC_API_STRATEGY;

  if (
    strategy === "offline" ||
    strategy === "local-device" ||
    strategy === "termux" ||
    strategy === "remote-custom"
  ) {
    return strategy;
  }

  return "offline";
}

/**
 * Lê a porta da API local configurada.
 */
export function getLocalApiPort(): number {
  const raw = process.env.EXPO_PUBLIC_LOCAL_API_PORT;
  const parsed = Number(raw);

  if (!Number.isNaN(parsed) && parsed > 0) {
    return parsed;
  }

  return 18115;
}

/**
 * Lê a porta de preview local configurada.
 */
export function getLocalPreviewPort(): number {
  const raw = process.env.EXPO_PUBLIC_LOCAL_PREVIEW_PORT;
  const parsed = Number(raw);

  if (!Number.isNaN(parsed) && parsed > 0) {
    return parsed;
  }

  return 8080;
}

/**
 * Informa se o suporte ao Termux está habilitado.
 */
export function isTermuxEnabled(): boolean {
  return readBool(process.env.EXPO_PUBLIC_ENABLE_TERMUX, false);
}

/**
 * Informa se a IA remota está habilitada.
 */
export function isRemoteAIEnabled(): boolean {
  return readBool(process.env.EXPO_PUBLIC_ENABLE_REMOTE_AI, true);
}

/**
 * Informa se integrações com GitHub estão habilitadas.
 */
export function isGitHubEnabled(): boolean {
  return readBool(process.env.EXPO_PUBLIC_ENABLE_GITHUB, true);
}

/**
 * Informa se banco remoto está habilitado.
 */
export function isRemoteDbEnabled(): boolean {
  return readBool(process.env.EXPO_PUBLIC_ENABLE_REMOTE_DB, true);
}

/**
 * Informa se terminal remoto está habilitado.
 */
export function isRemoteTerminalEnabled(): boolean {
  return readBool(process.env.EXPO_PUBLIC_ENABLE_REMOTE_TERMINAL, false);
}