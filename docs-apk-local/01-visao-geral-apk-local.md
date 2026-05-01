# 01 — Visão Geral APK Local

## Situação atual

Hoje o projeto possui:
- base visual rica;
- muitas funcionalidades;
- build Expo/EAS possível;
- sinais de dependência de ambiente externo.

## Meta

A meta é fazer com que o APK:
- abra normalmente;
- funcione sem servidor Replit;
- salve localmente;
- renderize preview HTML localmente;
- tenha modos alternativos para execução avançada;
- não dependa de domínio externo fixo.

## O que precisa mudar

### 1. Configuração
As configurações atuais ainda têm sinais de ambiente Replit.

### 2. API/base URL
Não pode haver URL fixa espalhada pelo código.

### 3. Terminal
O terminal precisa ter modo local, modo remoto e modo indisponível.

### 4. Preview
Preview local e preview de servidor precisam ser separados.

### 5. Persistência
Projetos e checkpoints precisam sobreviver ao fechamento do app.

## Resultado desejado

O celular deve virar o centro da operação.

Servidor remoto será:
- opcional;
- configurável;
- substituível.