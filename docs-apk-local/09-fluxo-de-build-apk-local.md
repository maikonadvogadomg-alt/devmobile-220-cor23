# 09 — Fluxo de Build APK Local

## Objetivo

Gerar APK sem manter dependência funcional do Replit.

## Fluxo recomendado

### Etapa 1 — preparar config
- revisar `package.json`
- revisar `app.json`
- revisar `eas.json`
- criar `.env.example`

### Etapa 2 — validar modo local-first
Confirmar que:
- editor funciona localmente;
- preview HTML funciona localmente;
- projetos salvam localmente;
- checkpoints funcionam localmente.

### Etapa 3 — build com EAS
Usar EAS apenas para empacotar: