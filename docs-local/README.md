# Plano de Migração Local — DevMobile

Esta pasta reúne toda a documentação prática para transformar o **DevMobile** em um app que funcione **localmente no celular**, sem depender do servidor do Replit para funções essenciais.

## Objetivo

Fazer o app funcionar no modelo:

- **local-first**;
- com persistência local;
- com preview local;
- com editor local;
- com rotas e configuração desacopladas do Replit;
- com backend opcional, e não obrigatório;
- com possibilidade de usar o celular como “servidor” quando viável.

Em linguagem simples:

Hoje parte do cérebro do app ainda mora fora do celular.  
O objetivo desta pasta é trazer esse cérebro para dentro do próprio aparelho, ou pelo menos garantir que o app continue útil mesmo sem servidor externo.

---

## Conteúdo desta pasta

- `01-resumo-executivo.md` → diagnóstico geral
- `02-bugs-encontrados.md` → lista de bugs e causas
- `03-arquitetura-alvo-local.md` → como o app deve funcionar sem Replit
- `04-arquivos-que-devem-mudar.md` → lista dos arquivos e o que alterar
- `05-comandos-planejados.md` → comandos que deveriam ser executados
- `06-desacoplamento-replit.md` → tudo que precisa ser removido ou abstraído
- `07-roteiro-de-migracao.md` → ordem recomendada das mudanças
- `08-configuracoes-alvo.md` → como devem ficar package/app/eas/env
- `09-plano-termux-e-fallbacks.md` → uso de Termux e alternativas
- `10-checklist-final.md` → conferência final da migração

---

## Resultado esperado

Ao concluir as mudanças planejadas aqui, o DevMobile deve:

- abrir e editar projetos locais;
- salvar dados localmente;
- visualizar HTML localmente;
- funcionar sem Replit nas funções principais;
- tratar recursos remotos como opcionais;
- usar o servidor apenas quando realmente necessário;
- oferecer caminhos de contingência caso Termux falhe.

---

## Observação importante

Como o terminal do ambiente atual está instável e injeta comandos quebrados como `[object Object]`, esta pasta foi criada para permitir a evolução do projeto mesmo sem depender de execução imediata no terminal.