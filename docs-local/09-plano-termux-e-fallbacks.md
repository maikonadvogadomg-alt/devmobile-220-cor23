# 09 — Plano Termux e Fallbacks

## Cenário 1 — Termux funciona
O app pode usar integração local com Termux para:

- executar comandos;
- servir arquivos locais;
- atuar como backend auxiliar.

## Cenário 2 — Termux falha
O app deve continuar útil com:

- editor local;
- preview HTML local;
- projetos locais;
- checkpoints;
- tarefas;
- memória;
- configurações;
- IA remota opcional.

## Cenário 3 — VSCode-like / Monaco / visual alternativo
Esses modos hoje podem depender de servidor para algumas funções.

### Mudança necessária
Separar:
- camada visual do editor
- camada de execução

Assim o editor continua funcionando mesmo sem runtime externo.

## Regra de ouro
Editor e organização do projeto não podem depender do servidor.

Servidor local ou remoto deve ser “turbo”, não “motor obrigatório”.