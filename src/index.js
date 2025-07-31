// Importa o módulo readline para entrada de dados
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta a quantidade de vitórias e derrotas ao utilizador
rl.question("Digite a quantidade de vitórias: ", (vitoriasInput) => {
  rl.question("Digite a quantidade de derrotas: ", (derrotasInput) => {
    
    const vitorias = parseInt(vitoriasInput);
    const derrotas = parseInt(derrotasInput);
    const saldo = vitorias - derrotas;

    let nivel = "";

    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`);

    rl.close(); // Fecha a leitura
  });
});




