# 07 — Roteiro de Migração

## Ordem recomendada

### Etapa 1 — limpar configuração
- revisar `mobile/.env`
- criar `mobile/.env.example`
- revisar `mobile/package.json`
- revisar `mobile/app.json`
- revisar `mobile/eas.json`

### Etapa 2 — centralizar runtime
- criar `mobile/services/apiBase.ts`
- criar `mobile/services/runtimeMode.ts`
- criar `mobile/services/terminalService.ts`
- criar `mobile/services/previewService.ts`
- criar `mobile/services/storageService.ts`

### Etapa 3 — remover hardcodes
- revisar `mobile/hooks/useApiBase.ts`
- revisar `mobile/app/(tabs)/editor.tsx`
- revisar `mobile/components/PreviewPanel.tsx`
- revisar `mobile/components/Terminal.tsx`

### Etapa 4 — separar o que é local e o que é opcional
- IA
- GitHub
- banco
- terminal avançado
- preview de servidor

### Etapa 5 — validar build local/APK
- revisar `eas.json`
- testar build
- testar APK sem Replit
- testar APK offline

## Regra principal
Primeiro arrumar a base.
Depois expandir capacidades.