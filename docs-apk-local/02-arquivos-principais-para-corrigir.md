# 02 — Arquivos Principais para Corrigir

## Arquivos de configuração

### `mobile/.env`
Hoje contém domínio Replit.  
Precisa ser substituído por estratégia neutra e local-first.

### `mobile/package.json`
Precisa revisar:
- scripts;
- dependências desnecessárias;
- nome e fluxo de build.

### `mobile/app.json`
Precisa revisar:
- permissões;
- scheme;
- cleartext traffic;
- identidade do app;
- plugins.

### `mobile/eas.json`
Precisa revisar:
- perfis;
- variáveis de ambiente;
- coerência com build local.

---

## Arquivos de runtime

### `mobile/hooks/useApiBase.ts`
Centralizar a origem da base URL.

### `mobile/context/AppContext.tsx`
Separar responsabilidades e armazenar modo de execução.

### `mobile/components/Terminal.tsx`
Definir modos do terminal.

### `mobile/components/PreviewPanel.tsx`
Separar preview local de preview de servidor.

### `mobile/components/VSCodeView.tsx`
Validar o que depende de backend e o que é apenas visual.

### `mobile/components/MonacoEditor.tsx`
Separar editor visual de runtime remoto.

### `mobile/app/(tabs)/editor.tsx`
Remover chamadas hardcoded e dependências diretas do backend.

---

## Arquivos novos recomendados

### Criar `mobile/services/`
Sugestão:
- `apiBase.ts`
- `runtimeMode.ts`
- `terminalService.ts`
- `previewService.ts`
- `storageService.ts`
- `githubService.ts`
- `aiService.ts`