// const pagamentoAhVista = 1;
// const valorProduto = 500;
// const desconto = valorProduto * 10 / 100;
// let ahVista = valorProduto - desconto;
// let parcela = valorProduto / 6;
// const metodoEscolhido = 2;

// console.log("Se você comprar a vista recebe um desconto de 10%, se for parcelado, é sem desconto e em 6x sem juros");

// if(metodoEscolhido == pagamentoAhVista){
//     console.log(`O preço do produto com desconto ficou: ${ahVista}`);
// }else{
//     console.log(`O valor parcelado é: ${parcela} reais em 6x`);
// }

let valorDaCompra = 100;
const numeroDeParcelas = 1;

if(numeroDeParcelas === 1){
    let desconto = valorDaCompra * 10/100;
    valorDaCompra -= desconto;
    console.log(`O valor a vista é: ${valorDaCompra}`);
}else{
    valorDaCompra /= numeroDeParcelas;
    console.log(`O valor parcelado é: ${valorDaCompra}`);
}


