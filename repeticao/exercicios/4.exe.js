const palavra = "abracadabra";

let contador = 0;

for (const letras of palavra) {
    if (letras === "a") {
        contador++;
    }
}
console.log(`A palavra ${palavra} tem ${contador} letras "a's"`);