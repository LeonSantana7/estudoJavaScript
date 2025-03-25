const temIngresso = true;
const censura = 16;
const idade = 17;
const estaAcompanhado = true;

// tem ingresso 
// tem idade maior ou igual censura ou está com os pais

if(temIngresso  && (idade >= censura || estaAcompanhado == true)){
    console.log("Pode entrar!");
}else{
    console.log("Não pode entrar!");
}