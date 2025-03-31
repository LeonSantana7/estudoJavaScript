const numbers = [
    0,
    5,
    3,
    69,
    45,
    18,
    13,
    2,
];
console.log(numbers.length);
let soma = 0;
for (const number of numbers) {
    soma += number;
    console.log(`A soma parcial é: ${soma}`);
}
console.log(`A soma total é: ${soma}`);