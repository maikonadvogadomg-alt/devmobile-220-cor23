# Diário do Projeto — DevMobile

**Última atualização:** 01/05/2026 00:11  
**Projeto:** DevMobile  
**Escopo analisado:** projeto inteiro (`/mobile`, `README.md`, `PLANO.md`, `docs-local/`, `docs-apk-local/`, `.sk/`)  
**Status geral:** base de configuração local-first e serviços centrais já foram aplicados, mas a migração estrutural completa das telas, do terminal e da persistência local ainda está em andamento

---

## ✅ O que foi feito

### 1. README principal foi criado e mantido
O projeto possui um `README.md` amplo, em português, cobrindo:

- visão geral do DevMobile;
- proposta como IDE mobile/web;
- principais recursos;
- stack;
- estrutura;
- arquitetura;
- instalação;
- execução;
- build APK;
- dependência de servidor externo;
- problemas conhecidos;
- melhorias recomendadas.

### 2. Pasta `docs-local/` foi criada
Foi criada a pasta `docs-local/` com foco em migração local e desacoplamento do Replit.

Arquivos existentes:
- `docs-local/README.md`
- `docs-local/01-resumo-executivo.md`
- `docs-local/02-bugs-encontrados.md`
- `docs-local/03-arquitetura-alvo-local.md`
- `docs-local/04-arquivos-que-devem-mudar.md`
- `docs-local/05-comandos-planejados.md`
- `docs-local/06-desacoplamento-replit.md`
- `docs-local/07-roteiro-de-migracao.md`
- `docs-local/08-configuracoes-alvo.md`
- `docs-local/09-plano-termux-e-fallbacks.md`
- `docs-local/10-checklist-final.md`

### 3. Pasta `docs-apk-local/` foi criada
Foi criada uma segunda pasta de documentação, mais focada em APK, EAS, rotas, portas e configuração-alvo local.

Arquivos existentes:
- `docs-apk-local/README.md`
- `docs-apk-local/01-visao-geral-apk-local.md`
- `docs-apk-local/02-arquivos-principais-para-corrigir.md`
- `docs-apk-local/03-configuracao-alvo-env.md`
- `docs-apk-local/04-configuracao-alvo-package-json.md`
- `docs-apk-local/05-configuracao-alvo-app-json.md`
- `docs-apk-local/06-configuracao-alvo-eas-json.md`
- `docs-apk-local/07-rotas-api-locais-recomendadas.md`
- `docs-apk-local/08-portas-locais-e-estrategia-de-rede.md`
- `docs-apk-local/09-fluxo-de-build-apk-local.md`
- `docs-apk-local/10-fallbacks-termux-vscode-monaco.md`
- `docs-apk-local/11-checklist-de-migracao-apk-local.md`

### 4. Configuração local-first foi aplicada nos arquivos reais
Os seguintes arquivos reais do app foram preparados/regravados com foco local-first:

- `mobile/.env`
- `mobile/.env.example`
- `mobile/package.json`
- `mobile/app.json`
- `mobile/eas.json`

Objetivo dessas mudanças:
- neutralizar dependência direta do Replit;
- padronizar scripts corretos do app Expo;
- alinhar build para cenário local/APK;
- preparar o runtime para funcionar sem backend obrigatório.

### 5. Camada inicial de serviços foi criada no código real
Foram criados os arquivos:

- `mobile/services/runtimeMode.ts`
- `mobile/services/apiBase.ts`
- `mobile/services/terminalService.ts`
- `mobile/services/previewService.ts`
- `mobile/services/storageService.ts`

Esses arquivos criam uma base central para:
- modo de execução;
- estratégia de API;
- terminal;
- preview;
- persistência conceitual.

### 6. `useApiBase.ts` foi reestruturado
O arquivo:
- `mobile/hooks/useApiBase.ts`

foi refeito para consumir a nova camada de serviços, em vez de espalhar a lógica de URL base pelas telas.

### 7. Perfil de trabalho foi registrado
Foi criado/ajustado:
- `.sk/perfil-jasmim.md`

Com isso, o projeto tem registro explícito de:
- preferências do Saulo;
- direção técnica consolidada;
- foco em local-first;
- necessidade de respostas simples e seguras.

### 8. O acoplamento histórico ao Replit foi mapeado
Foi confirmado por documentação e leitura de arquivos que ainda existem vínculos históricos, especialmente:

- `mobile/.replit-artifact/artifact.toml`
- hardcodes no código das telas
- lógica antiga de runtime espalhada
- expectativa de backend local/remoto separado

### 9. O terminal problemático do ambiente foi documentado
Foram registrados erros reais como:
- `[object Object]`
- `Error: Cannot find module ,[object Object],`
- `bash: line 1: Error:: command not found`
- `npm install` na raiz errada
- scripts `dev/start` da raiz chamando `node index.js`

---

## 🔄 O que foi alterado recentemente

### 1. O projeto saiu da fase só-documentação
Antes o foco estava principalmente em:
- diagnóstico;
- documentação;
- planejamento.

Agora houve aplicação real em arquivos-base do app.

### 2. `.env` foi neutralizado
O arquivo deixou de apontar para fluxo preso ao Replit e passou a usar chaves como:

- `EXPO_PUBLIC_APP_MODE`
- `EXPO_PUBLIC_API_STRATEGY`
- `EXPO_PUBLIC_REMOTE_API_URL`
- `EXPO_PUBLIC_LOCAL_API_PORT`
- `EXPO_PUBLIC_LOCAL_PREVIEW_PORT`

### 3. `package.json`, `app.json` e `eas.json` foram alinhados
Esses arquivos foram reescritos para refletir melhor um cenário:
- local-first;
- Expo correto;
- build coerente com APK;
- menos preso ao ambiente anterior.

### 4. Foi criada a pasta `mobile/services/`
Essa mudança é central porque define uma “camada de decisão” do app.

Em vez de cada tela decidir sozinha:
- qual URL usar;
- se tem terminal;
- se há preview;
- se o backend existe;

agora existe uma base central para esse tipo de decisão.

### 5. `useApiBase.ts` deixou de ser o centro isolado
Antes ele concentrava sozinho a lógica de endpoint.

Agora ele passou a consultar a nova camada central.

### 6. A documentação ficou mais madura
Hoje o projeto já tem:
- documentação geral;
- documentação de migração local;
- documentação específica para APK local;
- documentação de rotas/portas;
- roteiro de migração.

---

## ⏳ O que ainda falta

### 1. Remover hardcodes reais das telas
Ainda faltam alterações reais em arquivos como:

- `mobile/app/(tabs)/editor.tsx`
- `mobile/components/Terminal.tsx`
- `mobile/components/PreviewPanel.tsx`

Objetivo:
- parar de usar `localhost:8080/api` direto;
- fazer a UI usar os novos services;
- separar interface de motor de execução.

### 2. Tratar `.replit-artifact`
Ainda falta decidir como lidar com:
- `mobile/.replit-artifact/artifact.toml`

Esse arquivo permanece como vínculo histórico com o ambiente anterior.

### 3. Auditar e refatorar o terminal do app
Ainda falta análise estrutural e eventual correção de:

- `mobile/components/Terminal.tsx`
- `mobile/app/(tabs)/terminal.tsx`

Pontos ainda não confirmados:
- se instala bibliotecas de verdade;
- se suporta muitas dependências;
- se aguenta tempo maior de execução;
- se roda em background;
- se depende de backend externo;
- se parte da UI apenas simula saída.

### 4. Verificar o alcance real da IA
Ainda falta confirmar tecnicamente o alcance da IA sobre:
- projeto;
- arquivos;
- terminal;
- instalação de bibliotecas;
- GitHub;
- checkpoints;
- preview;
- banco;
- modos alternativos de editor.

### 5. Implementar persistência local real
A camada `storageService.ts` ainda é conceitual.

Ainda falta conectá-la a um mecanismo real de armazenamento local para:
- projetos;
- checkpoints;
- configurações;
- restauração de sessão.

### 6. Refatorar arquivos grandes
Ainda faltam refatorações em:

- `mobile/context/AppContext.tsx`
- `mobile/app/(tabs)/editor.tsx`
- `mobile/app/(tabs)/index.tsx`
- `mobile/app/(tabs)/settings.tsx`

### 7. Validar execução e build reais
Ainda falta confirmação prática de:
- instalação correta das dependências dentro de `mobile`;
- funcionamento real do Expo;
- comportamento sem Replit;
- comportamento offline;
- build APK local/EAS.

### 8. Aplicar documentação técnica no código
Ainda falta a fase ampla de:
- JSDoc nas funções públicas;
- documentação de arquitetura em arquivos próprios, se desejado;
- documentação específica do terminal e da IA.

---

## 🐛 Bugs encontrados / corrigidos

### Bug 1 — `node index.js` na raiz errada
**Status:** identificado  
**Erro real:**