# DevMobile

IDE mobile/web com editor de código, terminal, chat com IA, pré-visualização e utilitários de projeto, construída com **Expo + React Native + Expo Router**.

> Projeto pensado para editar, organizar, testar e acompanhar projetos diretamente no celular, com foco em praticidade e recursos integrados.

---

## Sumário

- [Visão geral](#visão-geral)
- [Objetivo do projeto](#objetivo-do-projeto)
- [Principais recursos](#principais-recursos)
- [Stack utilizada](#stack-utilizada)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquitetura](#arquitetura)
- [Fluxo de funcionamento](#fluxo-de-funcionamento)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração de ambiente](#configuração-de-ambiente)
- [Como executar](#como-executar)
- [Build e APK](#build-e-apk)
- [Servidor local e dependência externa](#servidor-local-e-dependência-externa)
- [Banco de dados](#banco-de-dados)
- [IA e provedores](#ia-e-provedores)
- [Funcionalidades por tela](#funcionalidades-por-tela)
- [Componentes principais](#componentes-principais)
- [Scripts disponíveis](#scripts-disponíveis)
- [Problemas conhecidos](#problemas-conhecidos)
- [Melhorias recomendadas](#melhorias-recomendadas)
- [Boas práticas de desenvolvimento](#boas-práticas-de-desenvolvimento)
- [Checklist para produção](#checklist-para-produção)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Visão geral

O **DevMobile** é um ambiente de desenvolvimento adaptado para uso em dispositivos móveis. Ele reúne, dentro do app:

- gerenciamento de projetos;
- editor de arquivos;
- terminal embutido;
- integração com IA;
- visualização de HTML e preview de servidor;
- checkpoints;
- utilitários como plano do projeto, memória da IA, biblioteca e ferramentas auxiliares.

Na prática, ele funciona como uma “caixa de ferramentas” para programar e organizar projetos no celular.

---

## Objetivo do projeto

O objetivo é oferecer uma experiência parecida com uma mini-IDE portátil.

Pense assim:

- **editor de código** = a mesa de trabalho;
- **terminal** = a bancada de ferramentas;
- **IA** = um copiloto;
- **preview** = a vitrine para ver o resultado;
- **checkpoints** = fotos de segurança do projeto;
- **gerenciador de projetos** = o armário onde tudo fica guardado.

---

## Principais recursos

- Interface em abas com navegação por telas
- Editor de arquivos
- Sidebar de arquivos
- Terminal embutido
- Painel de preview
- Playground HTML
- Chat com IA
- Assistente por voz
- Memória da IA
- Plano do projeto
- Checkpoints de projeto
- Integração com GitHub
- Busca de bibliotecas
- Área de status do sistema
- Importação e exportação de arquivos ZIP/TAR
- Estrutura adaptada para web e mobile

---

## Stack utilizada

### Frontend
- React Native
- Expo
- Expo Router
- TypeScript

### Bibliotecas e integrações visíveis no projeto
- `expo-router`
- `expo-blur`
- `expo-haptics`
- `expo-font`
- `expo-web-browser`
- `react-native-webview`
- `react-native-safe-area-context`

### Infra auxiliar
- Node.js
- scripts customizados em `mobile/scripts`
- servidor auxiliar em `mobile/server`

---

## Estrutura do projeto

```text
DevMobile/
├── README.md
├── PLANO.md
├── .sk/
│   └── memoria.json
└── mobile/
    ├── app/
    │   ├── _layout.tsx
    │   ├── +not-found.tsx
    │   └── (tabs)/
    │       ├── _layout.tsx
    │       ├── index.tsx
    │       ├── editor.tsx
    │       ├── terminal.tsx
    │       ├── tasks.tsx
    │       ├── plugins.tsx
    │       ├── ai.tsx
    │       └── settings.tsx
    ├── components/
    │   ├── AIChat.tsx
    │   ├── VoiceAssistant.tsx
    │   ├── Terminal.tsx
    │   ├── CodeEditor.tsx
    │   ├── FileSidebar.tsx
    │   ├── PreviewPanel.tsx
    │   ├── HtmlPlayground.tsx
    │   ├── SystemStatus.tsx
    │   ├── GitHubModal.tsx
    │   ├── CheckpointsModal.tsx
    │   ├── ProjectPlanModal.tsx
    │   └── ...
    ├── context/
    │   └── AppContext.tsx
    ├── hooks/
    │   ├── useApiBase.ts
    │   └── useColors.ts
    ├── utils/
    │   ├── projectPlan.ts
    │   └── zipUtils.ts
    ├── server/
    │   ├── serve.js
    │   └── templates/
    │       └── landing-page.html
    ├── scripts/
    │   └── build.js
    ├── plugins/
    │   └── withTermuxIntent.js
    ├── assets/
    │   └── images/
    │       └── icon.png
    ├── package.json
    ├── app.json
    ├── tsconfig.json
    ├── babel.config.js
    ├── metro.config.js
    ├── eas.json
    └── .env