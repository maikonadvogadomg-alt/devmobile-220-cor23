# PLANO DO PROJETO: DevMobile-2.2.0-source

> Gerado automaticamente pelo SK Code Editor em 01/05/2026, 00:15:40
> **92 arquivo(s)** | **~28.448 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
DevMobile-2.2.0-source/
├── .sk/
│   ├── diario-copia.md
│   ├── diario.md
│   ├── diario1.md
│   ├── memoria-copia.json
│   ├── memoria.json
│   └── perfil-jasmim.md
├── docs-apk-local/
│   ├── 01-visao-geral-apk-local.md
│   ├── 02-arquivos-principais-para-corrigir.md
│   ├── 03-configuracao-alvo-env.md
│   ├── 04-configuracao-alvo-package-json.md
│   ├── 05-configuracao-alvo-app-json.md
│   ├── 06-configuracao-alvo-eas-json.md
│   ├── 07-rotas-api-locais-recomendadas.md
│   ├── 08-portas-locais-e-estrategia-de-rede.md
│   ├── 09-fluxo-de-build-apk-local.md
│   ├── 10-fallbacks-termux-vscode-monaco.md
│   ├── 11-checklist-de-migracao-apk-local.md
│   └── README.md
├── docs-local/
│   ├── 01-resumo-executivo.md
│   ├── 02-bugs-encontrados.md
│   ├── 03-arquitetura-alvo-local.md
│   ├── 04-arquivos-que-devem-mudar.md
│   ├── 05-comandos-planejados.md
│   ├── 06-desacoplamento-replit.md
│   ├── 07-roteiro-de-migracao.md
│   ├── 08-configuracoes-alvo.md
│   ├── 09-plano-termux-e-fallbacks.md
│   ├── 10-checklist-final.md
│   └── README.md
├── mobile/
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── _layout.tsx
│   │   │   ├── ai.tsx
│   │   │   ├── editor.tsx
│   │   │   ├── index.tsx
│   │   │   ├── plugins.tsx
│   │   │   ├── settings.tsx
│   │   │   ├── tasks.tsx
│   │   │   └── terminal.tsx
│   │   ├── _layout.tsx
│   │   └── +not-found.tsx
│   ├── assets/
│   │   └── images/
│   │       └── icon.png
│   ├── components/
│   │   ├── AIChat.tsx
│   │   ├── AIMemoryModal.tsx
│   │   ├── CampoLivreModal.tsx
│   │   ├── CheckpointsModal.tsx
│   │   ├── CodeEditor.tsx
│   │   ├── CombinarAppsModal.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── ErrorFallback.tsx
│   │   ├── FileSidebar.tsx
│   │   ├── FloatingAI.tsx
│   │   ├── GitHubModal.tsx
│   │   ├── HtmlPlayground.tsx
│   │   ├── KeyboardAwareScrollViewCompat.tsx
│   │   ├── LibrarySearch.tsx
│   │   ├── ManualModal.tsx
│   │   ├── MessageRenderer.tsx
│   │   ├── MonacoEditor.tsx
│   │   ├── PreviewPanel.tsx
│   │   ├── ProjectOverviewModal.tsx
│   │   ├── ProjectPlanModal.tsx
│   │   ├── SystemStatus.tsx
│   │   ├── Terminal.tsx
│   │   ├── VoiceAssistant.tsx
│   │   └── VSCodeView.tsx
│   ├── constants/
│   │   └── colors.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── hooks/
│   │   ├── useApiBase.ts
│   │   └── useColors.ts
│   ├── plugins/
│   │   └── withTermuxIntent.js
│   ├── scripts/
│   │   └── build.js
│   ├── server/
│   │   ├── templates/
│   │   │   └── landing-page.html
│   │   └── serve.js
│   ├── services/
│   │   ├── apiBase.ts
│   │   ├── previewService.ts
│   │   ├── runtimeMode.ts
│   │   ├── storageService.ts
│   │   └── terminalService.ts
│   ├── utils/
│   │   ├── projectPlan.ts
│   │   └── zipUtils.ts
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── app.json
│   ├── babel.config.js
│   ├── eas.json
│   ├── expo-env.d.ts
│   ├── metro.config.js
│   ├── package.json
│   └── tsconfig.json
├── PLANO1.md
└── README1.md
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
BASE_PATH=seu_valor_aqui
REPLIT_INTERNAL_APP_DOMAIN=seu_valor_aqui
REPLIT_DEV_DOMAIN=seu_valor_aqui
EXPO_PUBLIC_DOMAIN=seu_valor_aqui
REPL_ID=seu_valor_aqui
EXPO_PUBLIC_REPL_ID=seu_valor_aqui
PORT=seu_valor_aqui
EXPO_PUBLIC_API_BASE_URL=seu_valor_aqui
EXPO_PUBLIC_REMOTE_API_URL=seu_valor_aqui
EXPO_PUBLIC_APP_MODE=seu_valor_aqui
EXPO_PUBLIC_API_STRATEGY=seu_valor_aqui
EXPO_PUBLIC_LOCAL_API_PORT=seu_valor_aqui
EXPO_PUBLIC_LOCAL_PREVIEW_PORT=seu_valor_aqui
EXPO_PUBLIC_ENABLE_TERMUX=seu_valor_aqui
EXPO_PUBLIC_ENABLE_REMOTE_AI=seu_valor_aqui
EXPO_PUBLIC_ENABLE_GITHUB=seu_valor_aqui
EXPO_PUBLIC_ENABLE_REMOTE_DB=seu_valor_aqui
EXPO_PUBLIC_ENABLE_REMOTE_TERMINAL=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `mobile/app/(tabs)/index.tsx` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`PLANO1.md`** _(436 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`README1.md`** _(173 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

---

### 📁 `.sk/`
> Pasta '.sk' — agrupamento de arquivos relacionados.

**`diario-copia.md`** _(58 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`diario.md`** _(261 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`diario1.md`** _(62 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`memoria-copia.json`** _(1 linha)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`memoria.json`** _(1 linha)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`perfil-jasmim.md`** _(28 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

---

### 📁 `docs-apk-local/`
> Pasta 'docs-apk-local' — agrupamento de arquivos relacionados.

**`01-visao-geral-apk-local.md`** _(45 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`02-arquivos-principais-para-corrigir.md`** _(66 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`03-configuracao-alvo-env.md`** _(13 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`04-configuracao-alvo-package-json.md`** _(7 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`05-configuracao-alvo-app-json.md`** _(10 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`06-configuracao-alvo-eas-json.md`** _(14 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`07-rotas-api-locais-recomendadas.md`** _(9 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`08-portas-locais-e-estrategia-de-rede.md`** _(5 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`09-fluxo-de-build-apk-local.md`** _(23 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`10-fallbacks-termux-vscode-monaco.md`** _(35 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`11-checklist-de-migracao-apk-local.md`** _(37 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`README.md`** _(90 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

---

### 📁 `docs-local/`
> Pasta 'docs-local' — agrupamento de arquivos relacionados.

**`01-resumo-executivo.md`** _(53 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`02-bugs-encontrados.md`** _(4 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`03-arquitetura-alvo-local.md`** _(7 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`04-arquivos-que-devem-mudar.md`** _(129 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`05-comandos-planejados.md`** _(6 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`06-desacoplamento-replit.md`** _(61 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`07-roteiro-de-migracao.md`** _(40 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`08-configuracoes-alvo.md`** _(36 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`09-plano-termux-e-fallbacks.md`** _(35 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`10-checklist-final.md`** _(46 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`README.md`** _(55 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

---

### 📁 `mobile/`
> Pasta 'mobile' — agrupamento de arquivos relacionados.

**`.env`** _(11 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.env.example`** _(28 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.gitignore`** _(42 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`app.json`** _(54 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`babel.config.js`** _(7 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`eas.json`** _(17 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`expo-env.d.ts`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`metro.config.js`** _(4 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(35 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `mobile/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(23 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `mobile/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`+not-found.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`_layout.tsx`** _(70 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

---

### 📁 `mobile/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(972 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AIMemoryModal.tsx`** _(203 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CampoLivreModal.tsx`** _(989 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CheckpointsModal.tsx`** _(173 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CodeEditor.tsx`** _(337 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarAppsModal.tsx`** _(352 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ErrorBoundary.tsx`** _(55 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`ErrorFallback.tsx`** _(279 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`FileSidebar.tsx`** _(672 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`FloatingAI.tsx`** _(897 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubModal.tsx`** _(975 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`HtmlPlayground.tsx`** _(706 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`KeyboardAwareScrollViewCompat.tsx`** _(30 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`LibrarySearch.tsx`** _(327 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`ManualModal.tsx`** _(723 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`MessageRenderer.tsx`** _(265 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`MonacoEditor.tsx`** _(163 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`PreviewPanel.tsx`** _(493 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`ProjectOverviewModal.tsx`** _(504 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ProjectPlanModal.tsx`** _(369 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`SystemStatus.tsx`** _(480 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(824 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VSCodeView.tsx`** _(616 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`VoiceAssistant.tsx`** _(954 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `mobile/constants/`
> Pasta 'constants' — agrupamento de arquivos relacionados.

**`colors.ts`** _(98 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `mobile/context/`
> Gerenciamento de estado global — dados compartilhados entre telas.

**`AppContext.tsx`** _(1150 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

---

### 📁 `mobile/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`useApiBase.ts`** _(21 linhas)_
HOOK de dados — busca informacoes da API e gerencia estado de carregamento e erro.

**`useColors.ts`** _(25 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'colors'.

---

### 📁 `mobile/plugins/`
> Pasta 'plugins' — agrupamento de arquivos relacionados.

**`withTermuxIntent.js`** _(26 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `mobile/scripts/`
> Pasta 'scripts' — agrupamento de arquivos relacionados.

**`build.js`** _(574 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `mobile/server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`serve.js`** _(136 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `mobile/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`apiBase.ts`** _(56 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`previewService.ts`** _(26 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`runtimeMode.ts`** _(110 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storageService.ts`** _(24 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`terminalService.ts`** _(52 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `mobile/utils/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`projectPlan.ts`** _(208 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zipUtils.ts`** _(403 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `mobile/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(152 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`ai.tsx`** _(81 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`editor.tsx`** _(1567 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`index.tsx`** _(3209 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`plugins.tsx`** _(1234 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`settings.tsx`** _(1527 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`tasks.tsx`** _(522 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`terminal.tsx`** _(81 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `mobile/assets/images/`
> Pasta 'images' — agrupamento de arquivos relacionados.

**`icon.png`** _(2137 linhas)_
Arquivo de imagem.

---

### 📁 `mobile/server/templates/`
> Pasta 'templates' — agrupamento de arquivos relacionados.

**`landing-page.html`** _(461 linhas)_
Arquivo HTML — parte do projeto.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: DevMobile-2.2.0-source
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 92 | Linhas: ~28.448
Variaveis de ambiente necessarias: BASE_PATH, REPLIT_INTERNAL_APP_DOMAIN, REPLIT_DEV_DOMAIN, EXPO_PUBLIC_DOMAIN, REPL_ID, EXPO_PUBLIC_REPL_ID, PORT, EXPO_PUBLIC_API_BASE_URL, EXPO_PUBLIC_REMOTE_API_URL, EXPO_PUBLIC_APP_MODE, EXPO_PUBLIC_API_STRATEGY, EXPO_PUBLIC_LOCAL_API_PORT, EXPO_PUBLIC_LOCAL_PREVIEW_PORT, EXPO_PUBLIC_ENABLE_TERMUX, EXPO_PUBLIC_ENABLE_REMOTE_AI, EXPO_PUBLIC_ENABLE_GITHUB, EXPO_PUBLIC_ENABLE_REMOTE_DB, EXPO_PUBLIC_ENABLE_REMOTE_TERMINAL

Estrutura principal:
  .sk/diario-copia.md
  .sk/diario.md
  .sk/diario1.md
  .sk/memoria-copia.json
  .sk/memoria.json
  .sk/perfil-jasmim.md
  PLANO1.md
  README1.md
  docs-apk-local/01-visao-geral-apk-local.md
  docs-apk-local/02-arquivos-principais-para-corrigir.md
  docs-apk-local/03-configuracao-alvo-env.md
  docs-apk-local/04-configuracao-alvo-package-json.md
  docs-apk-local/05-configuracao-alvo-app-json.md
  docs-apk-local/06-configuracao-alvo-eas-json.md
  docs-apk-local/07-rotas-api-locais-recomendadas.md
  docs-apk-local/08-portas-locais-e-estrategia-de-rede.md
  docs-apk-local/09-fluxo-de-build-apk-local.md
  docs-apk-local/10-fallbacks-termux-vscode-monaco.md
  docs-apk-local/11-checklist-de-migracao-apk-local.md
  docs-apk-local/README.md
  docs-local/01-resumo-executivo.md
  docs-local/02-bugs-encontrados.md
  docs-local/03-arquitetura-alvo-local.md
  docs-local/04-arquivos-que-devem-mudar.md
  docs-local/05-comandos-planejados.md
  docs-local/06-desacoplamento-replit.md
  docs-local/07-roteiro-de-migracao.md
  docs-local/08-configuracoes-alvo.md
  docs-local/09-plano-termux-e-fallbacks.md
  docs-local/10-checklist-final.md
  docs-local/README.md
  mobile/.env
  mobile/.env.example
  mobile/.gitignore
  mobile/.replit-artifact/artifact.toml
  mobile/app.json
  mobile/app/(tabs)/_layout.tsx
  mobile/app/(tabs)/ai.tsx
  mobile/app/(tabs)/editor.tsx
  mobile/app/(tabs)/index.tsx
  mobile/app/(tabs)/plugins.tsx
  mobile/app/(tabs)/settings.tsx
  mobile/app/(tabs)/tasks.tsx
  mobile/app/(tabs)/terminal.tsx
  mobile/app/+not-found.tsx
  mobile/app/_layout.tsx
  mobile/assets/images/icon.png
  mobile/babel.config.js
  mobile/components/AIChat.tsx
  mobile/components/AIMemoryModal.tsx
  mobile/components/CampoLivreModal.tsx
  mobile/components/CheckpointsModal.tsx
  mobile/components/CodeEditor.tsx
  mobile/components/CombinarAppsModal.tsx
  mobile/components/ErrorBoundary.tsx
  mobile/components/ErrorFallback.tsx
  mobile/components/FileSidebar.tsx
  mobile/components/FloatingAI.tsx
  mobile/components/GitHubModal.tsx
  mobile/components/HtmlPlayground.tsx
  mobile/components/KeyboardAwareScrollViewCompat.tsx
  mobile/components/LibrarySearch.tsx
  mobile/components/ManualModal.tsx
  mobile/components/MessageRenderer.tsx
  mobile/components/MonacoEditor.tsx
  mobile/components/PreviewPanel.tsx
  mobile/components/ProjectOverviewModal.tsx
  mobile/components/ProjectPlanModal.tsx
  mobile/components/SystemStatus.tsx
  mobile/components/Terminal.tsx
  mobile/components/VSCodeView.tsx
  mobile/components/VoiceAssistant.tsx
  mobile/constants/colors.ts
  mobile/context/AppContext.tsx
  mobile/eas.json
  mobile/expo-env.d.ts
  mobile/hooks/useApiBase.ts
  mobile/hooks/useColors.ts
  mobile/metro.config.js
  mobile/package.json
  mobile/plugins/withTermuxIntent.js
  mobile/scripts/build.js
  mobile/server/serve.js
  mobile/server/templates/landing-page.html
  mobile/services/apiBase.ts
  mobile/services/previewService.ts
  mobile/services/runtimeMode.ts
  mobile/services/storageService.ts
  mobile/services/terminalService.ts
  mobile/tsconfig.json
  mobile/utils/projectPlan.ts
  mobile/utils/zipUtils.ts
```

---

*Plano gerado pelo SK Code Editor — 01/05/2026, 00:15:40*