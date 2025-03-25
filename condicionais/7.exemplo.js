// Programa para verificar se uma pessoa pode entrar no cinema

const temIngresso = true, estaAcompanhado = false;
const censura = 16;
const idade = 18;

if (temIngresso && (idade >= censura || estaAcompanhado)) {
    console.log("Pode assistir o filme!");
} else {
    console.log("Não pode assistir o filme!");
}