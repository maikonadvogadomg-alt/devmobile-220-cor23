# 08 — Configurações Alvo

## package.json — objetivo

O `mobile/package.json` deve conter scripts claros para:

- start
- dev
- android
- ios
- web
- build

Se o script `dev` for redundante, o projeto pode padronizar só `start`.

## app.json — objetivo

O `mobile/app.json` deve:

- manter `scheme` próprio;
- manter permissões mínimas necessárias;
- permitir tráfego local quando necessário;
- não depender de domínio Replit;
- ter identidade estável para APK local.

## eas.json — objetivo

O `mobile/eas.json` deve:

- ter perfis claros;
- evitar variáveis dependentes do Replit;
- permitir build independente.

## .env.example — objetivo

Criar um `.env.example` com opções como: