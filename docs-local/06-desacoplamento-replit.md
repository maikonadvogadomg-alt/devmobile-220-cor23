# 06 — Desacoplamento do Replit

## Sinais atuais de acoplamento

### 1. `.env`
Atualmente contém domínio Replit.

### 2. `.replit-artifact/artifact.toml`
Indica integração com ambiente hospedado.

### 3. Variáveis sugeridas no plano
- `REPLIT_INTERNAL_APP_DOMAIN`
- `REPLIT_DEV_DOMAIN`
- `REPL_ID`
- `EXPO_PUBLIC_REPL_ID`

### 4. Uso de `localhost:8080/api`
Mesmo sendo localhost, ainda pressupõe um servidor separado.

---

## O que precisa mudar

## Etapa 1 — parar de espalhar URL no código
Toda URL deve sair do código de tela e ir para um serviço central.

## Etapa 2 — definir modos de operação
O app deve ter um seletor interno:

- modo offline
- modo local no aparelho
- modo Termux
- modo servidor remoto customizado

## Etapa 3 — marcar recursos como opcionais
Exemplos:
- terminal real
- banco remoto
- GitHub
- IA

Se não houver backend, a interface deve continuar funcionando.

## Etapa 4 — remover suposições de hospedagem
Nada deve depender diretamente de:
- domínio Replit
- rotas Replit
- porta específica obrigatória
- preview remoto obrigatório

## Etapa 5 — criar fallback limpo
Se o backend estiver indisponível:
- mostrar estado “indisponível”
- não travar tela
- manter funções locais

---

## Resultado esperado

O Replit deve virar apenas um ambiente possível de desenvolvimento, e não a “coluna vertebral” do app.