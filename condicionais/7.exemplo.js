// Programa para verificar se uma pessoa pode entrar no cinema

const temIngresso = false;
const censura = 16;
const idade = 17;

if(temIngresso == false){
    console.log("Barrado por não ter ingresso!");
}else if(idade < censura){
    console.log("Barrado pela idade!")
}else{
    console.log("Pode entrar!");
}
