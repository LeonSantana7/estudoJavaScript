const idade = 70;

// menor de 18 -> menor de idade
// menor ou igual a 65 -> adulto
// acima de 65 -> idoso

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}