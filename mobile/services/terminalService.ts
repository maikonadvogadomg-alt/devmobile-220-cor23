import { buildApiUrl, hasActiveApi } from "./apiBase";
import { getApiStrategy, isRemoteTerminalEnabled, isTermuxEnabled } from "./runtimeMode";

export type TerminalMode = "simulado" | "local" | "termux" | "remoto" | "indisponivel";

/**
 * Define o modo atual do terminal de forma previsível.
 * Isso evita que a interface prometa mais do que consegue entregar.
 */
export function getTerminalMode(): TerminalMode {
  const strategy = getApiStrategy();

  if (strategy === "offline") {
    return "simulado";
  }

  if (strategy === "termux" && isTermuxEnabled()) {
    return "termux";
  }

  if (strategy === "local-device" && hasActiveApi()) {
    return "local";
  }

  if (strategy === "remote-custom" && isRemoteTerminalEnabled()) {
    return "remoto";
  }

  return "indisponivel";
}

/**
 * Informa de forma simples se o terminal real deve estar disponível.
 */
export function canUseRealTerminal(): boolean {
  const mode = getTerminalMode();
  return mode === "local" || mode === "termux" || mode === "remoto";
}

/**
 * Retorna a rota esperada para execução de comandos, se houver backend disponível.
 */
export function getTerminalExecuteUrl(): string | null {
  return buildApiUrl("/terminal/execute");
}

/**
 * Retorna a rota esperada para instalação de dependências, se houver backend disponível.
 */
export function getTerminalInstallUrl(): string | null {
  return buildApiUrl("/terminal/install");
}