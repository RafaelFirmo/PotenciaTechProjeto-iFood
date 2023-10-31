// variável para armazenar o nome do herói
let nome = "Heitor";

// variável para armazenar a quantidade de experiência do herói
let xp = 5000;

// variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para atribuir o nível do herói de acordo com a quantidade de experiência
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome + " está no nível de " + nivel);