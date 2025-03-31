const nomesDeEstudantes = [
    'Jose',
    'Joao',
    'Maria',
    'joana',
    'alice',
    'andreia',
];

// Remove o primeiro elemento de um array e retorna esse elemento removido. 
const primeiroNome = nomesDeEstudantes.shift();
console.log(primeiroNome)

// Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
const comprimento = nomesDeEstudantes.unshift("Leon");
console.log(comprimento);