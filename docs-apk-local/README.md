# Plano APK Local — DevMobile

Esta pasta reúne os documentos corrigidos e organizados para preparar o **DevMobile** para funcionar como app **local-first**, com foco em:

- APK independente;
- build com EAS;
- configuração local;
- rotas/API corretas;
- portas locais recomendadas;
- operação sem dependência obrigatória do Replit;
- uso do celular como base principal;
- fallback quando Termux ou backend local falharem.

---

## Objetivo

Transformar o projeto em uma aplicação que:

1. funcione localmente nas funções principais;
2. tenha configuração limpa para build APK;
3. use backend local apenas quando disponível;
4. trate integrações remotas como opcionais;
5. tenha documentação clara de portas, rotas e arquivos.

---

## Conteúdo desta pasta

- `01-visao-geral-apk-local.md`
- `02-arquivos-principais-para-corrigir.md`
- `03-configuracao-alvo-env.md`
- `04-configuracao-alvo-package-json.md`
- `05-configuracao-alvo-app-json.md`
- `06-configuracao-alvo-eas-json.md`
- `07-rotas-api-locais-recomendadas.md`
- `08-portas-locais-e-estrategia-de-rede.md`
- `09-fluxo-de-build-apk-local.md`
- `10-fallbacks-termux-vscode-monaco.md`
- `11-checklist-de-migracao-apk-local.md`

---

## Como usar esta pasta

Leia na seguinte ordem:

1. visão geral;
2. arquivos que precisam mudar;
3. configuração de ambiente;
4. `package.json`;
5. `app.json`;
6. `eas.json`;
7. rotas e portas;
8. fluxo de build;
9. fallbacks;
10. checklist final.

---

## Resultado esperado

Ao final da aplicação dessas orientações, o projeto deve estar pronto para evoluir para um dos modos abaixo:

### Modo A — Local puro
- projetos locais;
- preview local;
- configurações locais;
- checkpoints locais;
- sem backend obrigatório.

### Modo B — Local + Termux
- editor local;
- terminal local via Termux;
- preview mais avançado;
- rotas locais no aparelho.

### Modo C — Híbrido
- funções essenciais locais;
- IA/GitHub/banco como extras opcionais.

---

## Regra principal

O app precisa continuar útil mesmo se:
- o Replit estiver desligado;
- o Termux falhar;
- não houver internet;
- o backend remoto não responder.