const numbers = [
    10,
    35,
    97,
    14,
    78,
];

for (const number of numbers) {
        console.log(number);
}
console.log("------------------------------");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("------------------------------");

let indice = 0;
while(indice < numbers.length){
    console.log(numbers[indice]);
    indice ++;
}