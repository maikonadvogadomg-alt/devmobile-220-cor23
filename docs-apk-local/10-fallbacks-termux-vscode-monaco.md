# 10 — Fallbacks: Termux, VS Code-like e Monaco

## Objetivo

Garantir caminhos alternativos quando um modo falhar.

## Cenário 1 — local puro
O app continua útil com:
- editor;
- projetos;
- preview HTML;
- checkpoints;
- tarefas;
- memória;
- configurações.

## Cenário 2 — Termux
Se disponível:
- execução de comandos;
- instalação de pacotes;
- servidor local auxiliar.

## Cenário 3 — VS Code-like
A interface pode continuar funcionando como editor avançado mesmo se o runtime externo falhar.

## Cenário 4 — Monaco
O Monaco pode servir como editor alternativo local, sem obrigar backend.

## Regra principal
A interface do editor não pode ser confundida com o motor de execução.

Uma coisa é o volante do carro.  
Outra coisa é o motor.

Mesmo se o motor auxiliar falhar, o volante e o painel ainda precisam funcionar.