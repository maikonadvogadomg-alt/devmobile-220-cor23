# 04 — Arquivos que Devem Mudar

## 1. `mobile/hooks/useApiBase.ts`
### Problema
Provavelmente concentra a lógica de URL base.

### Mudança necessária
Criar suporte a modos:
- offline
- local-device
- termux
- remote-custom

### Resultado esperado
Nenhuma tela deve depender diretamente de `localhost:8080/api` hardcoded.

---

## 2. `mobile/app/(tabs)/editor.tsx`
### Problemas detectados
- uso de `http://localhost:8080/api`;
- muita lógica concentrada;
- mistura de UI com integração de backend.

### Mudanças necessárias
- trocar URL fixa por serviço centralizado;
- separar chamadas de banco/execução;
- criar fallback offline;
- garantir que preview HTML local continue funcionando mesmo sem servidor.

---

## 3. `mobile/components/Terminal.tsx`
### Problema
Pode assumir backend remoto como obrigatório.

### Mudança necessária
Criar modos do terminal:
- simulado
- local via Termux
- remoto
- indisponível com mensagem clara

---

## 4. `mobile/components/PreviewPanel.tsx`
### Problema
Pode estar misturando preview local e preview de servidor.

### Mudança necessária
Separar:
- preview de HTML local;
- preview de servidor remoto/local.

---

## 5. `mobile/context/AppContext.tsx`
### Problema
Arquivo gigante e central demais.

### Mudança necessária
Separar em blocos:
- projetos
- arquivos
- IA
- configurações
- banco
- execução
- checkpoints

---

## 6. `mobile/package.json`
### Objetivo
Garantir scripts corretos para rodar localmente.

### Revisões
- confirmar `start`
- confirmar `android`
- confirmar `ios`
- confirmar `web`
- confirmar `dev`
- remover scripts presos ao Replit, se existirem

---

## 7. `mobile/app.json`
### Objetivo
Garantir que o app esteja configurado para execução local, com permissões mínimas e coerentes.

### Revisões
- permissões Android
- scheme
- bundle/package
- cleartext traffic
- plugins realmente necessários

---

## 8. `mobile/eas.json`
### Objetivo
Ajustar build para cenário local/independente.

### Revisões
- perfis preview/production
- remover dependências desnecessárias de ambiente externo
- revisar variáveis de build

---

## 9. `mobile/.env`
### Problema
Hoje ainda aponta para domínio Replit.

### Mudança necessária
Substituir por `.env.example` neutro e configuração local-first.

---

## 10. Criar pasta `mobile/services/`
### Objetivo
Centralizar integrações.

### Sugestão
- `services/apiBase.ts`
- `services/terminalService.ts`
- `services/previewService.ts`
- `services/dbService.ts`
- `services/runtimeMode.ts`