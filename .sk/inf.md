☀️


Projetos


DevMobile-2.2.0-source


Nenhum arquivo aberto

Abra um arquivo ou peça para a IA criar

Arquivos
IA
⬛ Terminal
🌐 Preview

🔨
Compilar
Rodar

🌐
Preview
🗑 Limpar
📴 Offline
❌ Pedir Jasmim

╔══════════════════════════════════╗
║   SK Code Editor - Terminal v2.0 ║
╚══════════════════════════════════╝
Digite "help" para comandos · "db help" para banco de dados
/ $ Help
━━━ COMANDOS DE ARQUIVO ━━━
  ls [dir]           Listar arquivos
  cd <dir>           Mudar diretorio
  pwd                Diretorio atual
  cat <arquivo>      Ver conteudo
  touch <arquivo>    Criar arquivo
  mkdir <dir>        Criar diretorio
  rm [-rf] <alvo>    Remover
  mv <orig> <dest>   Mover/renomear
  cp <orig> <dest>   Copiar
  find <padrao>      Buscar arquivos
  tree               Arvore
━━━ EXECUCAO ━━━
  node <arquivo>     Executar JavaScript
  python <arquivo>   Executar Python
  npm <comando>      Gerenciador npm
  pip install <pkg>  Instalar pacote Python
━━━ BANCO DE DADOS ━━━
  db help            Guia de banco de dados
  db sqlite          Template SQLite
  db postgres        Template PostgreSQL
  db mongo           Template MongoDB
  db neon            Template Neon (Postgres cloud gratis)
  db supabase        Template Supabase
━━━ YOUTUBE / MIDIA ━━━
  youtube            Guia de download do YouTube
  youtube setup      Criar projeto completo de download
  yt help            Mesmo que youtube
━━━ UTILITARIOS ━━━
  search <termo>     Buscar no projeto
  env                Variaveis de ambiente
  clear              Limpar terminal
  date               Data e hora
💡 100+ pacotes npm · 80+ pacotes pip · Use: npm install <nome>
/ $ Ls
📁 .sk/
📁 docs-apk-local/
📁 docs-local/
📁 mobile/
📄 PLANO.md
📄 PLANO1.md
📄 README1.md
📄 SISTEMA.md
/ $ Pwd
/
/ $ Tree
│  ├─ diario-copia.md
│  ├─ diario.md
│  ├─ diario1.md
│  ├─ memoria-copia.json
│  ├─ memoria.json
│  ├─ perfil-jasmim.md
PLANO.md
PLANO1.md
README1.md
SISTEMA.md
│  ├─ 01-visao-geral-apk-local.md
│  ├─ 02-arquivos-principais-para-corrigir.md
│  ├─ 03-configuracao-alvo-env.md
│  ├─ 04-configuracao-alvo-package-json.md
│  ├─ 05-configuracao-alvo-app-json.md
│  ├─ 06-configuracao-alvo-eas-json.md
│  ├─ 07-rotas-api-locais-recomendadas.md
│  ├─ 08-portas-locais-e-estrategia-de-rede.md
│  ├─ 09-fluxo-de-build-apk-local.md
│  ├─ 10-fallbacks-termux-vscode-monaco.md
│  ├─ 11-checklist-de-migracao-apk-local.md
│  ├─ README.md
│  ├─ 01-resumo-executivo.md
│  ├─ 02-bugs-encontrados.md
│  ├─ 03-arquitetura-alvo-local.md
│  ├─ 04-arquivos-que-devem-mudar.md
│  ├─ 05-comandos-planejados.md
│  ├─ 06-desacoplamento-replit.md
│  ├─ 07-roteiro-de-migracao.md
│  ├─ 08-configuracoes-alvo.md
│  ├─ 09-plano-termux-e-fallbacks.md
│  ├─ 10-checklist-final.md
│  ├─ README.md
│  ├─ .env
│  ├─ .env.example
│  ├─ .gitignore
│  │  ├─ artifact.toml
│  ├─ app.json
│  │  │  ├─ _layout.tsx
│  │  │  ├─ ai.tsx
│  │  │  ├─ editor.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ plugins.tsx
│  │  │  ├─ settings.tsx
│  │  │  ├─ tasks.tsx
│  │  │  ├─ terminal.tsx
│  │  ├─ +not-found.tsx
│  │  ├─ _layout.tsx
│  │  │  ├─ icon.png
│  ├─ babel.config.js
│  │  ├─ AIChat.tsx
│  │  ├─ AIMemoryModal.tsx
│  │  ├─ CampoLivreModal.tsx
│  │  ├─ CheckpointsModal.tsx
│  │  ├─ CodeEditor.tsx
│  │  ├─ CombinarAppsModal.tsx
│  │  ├─ ErrorBoundary.tsx
│  │  ├─ ErrorFallback.tsx
│  │  ├─ FileSidebar.tsx
│  │  ├─ FloatingAI.tsx
│  │  ├─ GitHubModal.tsx
│  │  ├─ HtmlPlayground.tsx
│  │  ├─ KeyboardAwareScrollViewCompat.tsx
│  │  ├─ LibrarySearch.tsx
│  │  ├─ ManualModal.tsx
│  │  ├─ MessageRenderer.tsx
│  │  ├─ MonacoEditor.tsx
│  │  ├─ PreviewPanel.tsx
│  │  ├─ ProjectOverviewModal.tsx
│  │  ├─ ProjectPlanModal.tsx
│  │  ├─ SystemStatus.tsx
│  │  ├─ Terminal.tsx
│  │  ├─ VSCodeView.tsx
│  │  ├─ VoiceAssistant.tsx
│  │  ├─ colors.ts
│  │  ├─ AppContext.tsx
│  ├─ eas.json
│  ├─ expo-env.d.ts
│  │  ├─ useApiBase.ts
│  │  ├─ useColors.ts
│  ├─ metro.config.js
│  ├─ package.json
│  │  ├─ withTermuxIntent.js
│  │  ├─ build.js
│  │  ├─ serve.js
│  │  │  ├─ landing-page.html
│  │  ├─ apiBase.ts
│  │  ├─ previewService.ts
│  │  ├─ runtimeMode.ts
│  │  ├─ storageService.ts
│  │  ├─ terminalService.ts
│  ├─ tsconfig.json
│  │  ├─ projectPlan.ts
│  │  ├─ zipUtils.ts
/ $ Db help

╔══════════════════════════════════════╗
║         GUIA DE BANCO DE DADOS       ║
╚══════════════════════════════════════╝

Para usar banco de dados no seu projeto:

📦 SQLite (mais simples - no arquivo):
   npm install better-sqlite3
   Crie db.js:
   ```
   const db = require('better-sqlite3')('app.db');
   db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
   const insert = db.prepare('INSERT INTO users (name) VALUES (?)');
   insert.run('Joao');
   const rows = db.prepare('SELECT * FROM users').all();
   console.log(rows);
   ```

🐘 PostgreSQL:
   npm install pg
   Crie db.js:
   ```
   const { Pool } = require('pg');
   const pool = new Pool({ connectionString: process.env.DATABASE_URL });
   const res = await pool.query('SELECT NOW()');
   ```

🍃 MongoDB:
   npm install mongoose
   ```
   const mongoose = require('mongoose');
   await mongoose.connect(process.env.MONGODB_URI);
   ```

🔥 Firebase Firestore:
   npm install firebase
   ```
   import { initializeApp } from 'firebase/app';
   import { getFirestore, collection, addDoc } from 'firebase/firestore';
   ```

☁️ Neon (PostgreSQL na nuvem - gratuito):
   1. Crie conta em: console.neon.tech
   2. Crie um banco de dados
   3. Copie a connection string (DATABASE_URL)
   4. npm install pg
   5. Use: const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true })

💡 Use "db <tipo>" para criar template automatico:
   db sqlite | db postgres | db mongo | db firebase | db neon | db supabase
/ $ db postgres
✓ db.js e .env criados com template PostgreSQL
Execute: npm install pg
Configure DATABASE_URL no arquivo .env
/ $ Db SQLite
✓ db.js criado com template SQLite
Execute: npm install better-sqlite3
/ $ Db neon
✓ Template Neon PostgreSQL criado!
  Proximos passos:
  1. Acesse: console.neon.tech e crie uma conta gratuita
  2. Crie um projeto e copie a Connection String
  3. Cole no arquivo .env como DATABASE_URL
  4. Execute: npm install pg
  5. Execute: node db.js
  Neon oferece: 512MB gratis, PostgreSQL gerenciado, branching de banco!
/ $ Db postgres
✓ db.js e .env criados com template PostgreSQL
Execute: npm install pg
Configure DATABASE_URL no arquivo .env
/ $ Env
NODE_ENV=development
EDITOR=SK-Code-Editor
LANG=pt_BR.UTF-8
PATH=/usr/local/bin:/usr/bin:/bin
(Adicione variaveis em .env no projeto)
/ $ Search
search: falta termo
/
$
Ln 661, Col 58
Sp: 2
PLAINTEXT
LF
UTF-8





Jasmim
Digite um comando e pressione Enter…
↵

Arquivos




⚡ Menu Completo
role para ver mais ↕

🆕 Criar Novo App

Wizard com modelos prontos


📥 Importar ZIP

Abrir arquivo .zip do dispositivo


📥 Importar TAR.GZ

Abrir arquivo .tar.gz


📤 Exportar ZIP

Baixar projeto como .zip


🤖 Assistente IA — Jasmim

Converse, peça código, debug...


🔗 GitHub — Clonar / Enviar

Importar ou exportar para GitHub


📦 Instalar Biblioteca

npm install, pip install...


🗄️
🗄️ Banco de Dados (Neon/Postgres)

Conectar e rodar SQL


📸 Salvar Checkpoint

Criar ponto de restauração


🕐 Histórico de Checkpoints

Ver e restaurar versões salvas


📋 Lista de Tarefas — Taski

Organizar to-dos do projeto


🧠
🧠 Memória da Jasmim

O que ela sabe sobre você e o projeto


📐 Gerar Plano do Projeto

Gera PLANO.md com estrutura e stack


📖
📖 Manual do SK Code Editor

Guia completo em português


🔗
🔗 Combinar Apps

Une vários apps num único projeto


🩺
🩺 Status do Sistema (ao vivo)

Ver se tudo tá funcionando — clique pra atualizar


📄 Gerar SISTEMA.md

Cria documentação técnica do sistema


💾 Salvar Projeto

Salvar estado atual


🌐 Abrir Preview

Visualizar site/app rodando


⬛ Abrir Terminal

Rodar comandos bash


⚖️ Assistente Jurídico

Consulta jurídica com IA


💬 Campo Livre

Chat sem restrições


🗑️ Limpar Projeto

Apaga todos os arquivos e volta ao início

GitHub

GitHub

Criar repositório e enviar
Nome do Repositório
devmobile-220-cor
Será criado como: github.com/maikonadvogadomg-alt/devmobile-220-cor

Descrição (opcional)
Descrição do projeto...
Mensagem do envio
Enviado pelo SK Code Editor - 01/05/2026

Repositório Público

Qualquer pessoa pode ver

✓ Enviado! 91 arquivo(s) no repositório "devmobile-220-cor"
Abrir no VS Code

VS Code Web

Editor completo no navegador, grátis

StackBlitz — Terminal completo

VS Code + Node.js + npm install, grátis

Gitpod — Terminal Linux completo

Java, Python, Node — qualquer linguagem

Após editar lá, use o painel GitHub do app para puxar as alterações de volta.

