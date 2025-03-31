const paises = [
    'Brasil',
    'Argentina',
    'EUA',
    'Peru',
    'Canadá',
];

// Adicionando um país no final da lista (.push)
paises.push("Uruguai");
console.log(paises);

// Removendo um país no final da lista (.pop)
paises.pop();
console.log(paises);

// Adicionando um pais no inicio da lista (.unshift)
paises.unshift("Paraguai");
console.log(paises);

// Remover um pais no inicio da lista (.shift)
paises.shift();
console.log(paises);

// Imprimir o ultimo pais
console.log(paises[paises.length - 1]);

// Imprimir o segundo pais
console.log(paises[1]);

// Imprimir pais de indice 2
console.log(paises[2]);

