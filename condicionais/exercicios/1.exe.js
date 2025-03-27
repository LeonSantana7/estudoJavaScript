let valorDaCompra = 100;
const numeroDeParcelas = 3;

if(numeroDeParcelas === 1){
    let desconto = valorDaCompra * 10/100;
    valorDaCompra -= desconto;
    console.log(`O valor a vista é: ${valorDaCompra.toFixed(1)}`);
}else{
    valorDaCompra /= numeroDeParcelas;
    console.log(`O valor parcelado é: ${valorDaCompra.toFixed(1)}`);
}


