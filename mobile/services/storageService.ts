/**
 * Este arquivo define a camada conceitual de persistência local.
 * Aqui fica o "contrato" de como o app deve pensar em salvar dados,
 * mesmo antes de ligar isso a um mecanismo final de armazenamento.
 */

export type StorageCapability = {
  projects: boolean;
  checkpoints: boolean;
  settings: boolean;
  sessionRestore: boolean;
};

/**
 * Retorna quais capacidades mínimas de persistência o app deve ter no modo local-first.
 */
export function getStorageCapabilities(): StorageCapability {
  return {
    projects: true,
    checkpoints: true,
    settings: true,
    sessionRestore: true,
  };
}