#  Desafio - Calculadora de Partidas Rankeadas

Este projeto é um desafio proposto pelo Felipe Aguiar da Dio.
É uma calculadora simples desenvolvida em JavaScript que determina o nível de um jogador com base em suas vitórias e derrotas em partidas ranqueadas. A classificação é feita de acordo com um sistema de níveis, similar ao de muitos jogos competitivos.

## 🧠 Conceitos Utilizados

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão (`if`, `else if`, `else`)
- Funções
- Entrada de dados via terminal

## 🎯 Objetivo

Criar uma função que:

1. Recebe como parâmetros a **quantidade de vitórias** e **derrotas** de um jogador.
2. Calcula o **saldo de Rankeadas** com a fórmula:
  
    **saldo = vitórias - derrotas**

3. Com base na quantidade de vitórias, define o **nível do jogador**:
   

| Vitórias           | Nível     |
|--------------------|-----------|
| Menor que 10       | Ferro     |
| Entre 11 e 20      | Bronze    |
| Entre 21 e 50      | Prata     |
| Entre 51 e 80      | Ouro      |
| Entre 81 e 90      | Diamante  |
| Entre 91 e 100     | Lendário  |
| 101 ou mais        | Imortal   |

## Saída

Ao final, o programa exibirá a seguinte mensagem no terminal:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


## 🖥️ Como Executar o Projeto

1. **Pré-requisitos:**
Certifique-se de que o [Node.js](https://nodejs.org/) está instalado
(versão 16+).

2. **Clone o repositório:**

```bash
git clone https://github.com/cristiannemachado/calculadora-de-partidas-rankeadas.git
```


# 🤝 Contribuindo
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto

Crie uma nova branch (git checkout -b feature/nova-funcionalidade)

Faça suas alterações e commit (git commit -m 'Adiciona nova funcionalidade')

Envie sua branch (git push origin feature/nova-funcionalidade)

Abra um Pull Request.



Desenvolvido por  Cristiane Machado
