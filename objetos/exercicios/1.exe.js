const pessoa = {
    nome: "Leon",
    idade: 27,
    altura: 1.82,
    temCNH: false,
    apelidos: [
        'Leon',
        'Leo',
        'LS',
    ]
}

for (const apelido of pessoa.apelidos) {
    console.log(apelido);
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura,${pessoa.temCNH ? "possui CNH" : "não possui CNH"} e os seguintes apelidos: ${pessoa.apelidos.join(' - ')}`);

