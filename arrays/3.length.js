const posicao = 2;
const nomesDeEstudantes = [
    'Jose',
    'Joao',
    'Maria',
    'joana',
    'alice',
    'andreia',
];
nomesDeEstudantes[nomesDeEstudantes.length] = 'pedro';
console.log(`Adicionando com .length: ${nomesDeEstudantes}`);

// Metodo splice() é usado para remover, substituir ou adicionar novo elementos em posições especificas
// array.splice(início, quantidadeParaRemover, elemento1, elemento2, ...);
nomesDeEstudantes.splice(posicao,0,"Leon");
console.log(`Adicionando com .splice: ${nomesDeEstudantes}`);