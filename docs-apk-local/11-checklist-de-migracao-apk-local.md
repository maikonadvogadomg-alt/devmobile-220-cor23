# 11 — Checklist de Migração APK Local

## Configuração
- [ ] criar `mobile/.env.example`
- [ ] revisar `mobile/package.json`
- [ ] revisar `mobile/app.json`
- [ ] revisar `mobile/eas.json`

## Desacoplamento
- [ ] remover dependência obrigatória do domínio Replit
- [ ] remover URLs hardcoded das telas
- [ ] centralizar base URL
- [ ] criar modos de runtime

## Funções locais
- [ ] projetos locais
- [ ] arquivos locais
- [ ] preview HTML local
- [ ] checkpoints locais
- [ ] configurações locais

## Terminal e execução
- [ ] documentar terminal real
- [ ] definir fallback simulado
- [ ] definir modo Termux
- [ ] definir indisponibilidade limpa

## Alternativas
- [ ] revisar VSCodeView
- [ ] revisar MonacoEditor
- [ ] separar UI de runtime

## Build
- [ ] validar EAS para APK
- [ ] testar APK sem Replit
- [ ] testar APK offline
- [ ] testar em celular real