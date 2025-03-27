let valorDaCompra = 100;
const numeroDeParcelas = 7;
const taxaJuros = 1;

if(numeroDeParcelas === 1){
    let desconto = valorDaCompra * 10/100;
    valorDaCompra -= desconto;
    console.log(`O valor a vista é: ${valorDaCompra.toFixed(1)}`);

}else if((numeroDeParcelas >= 7) && (numeroDeParcelas <= 12)){
        let juros = taxaJuros * numeroDeParcelas;
        let valorComJuros = valorDaCompra * (1 + juros / 100);
        valorComJuros /= numeroDeParcelas;
        console.log(`O valor parcelado é: ${valorComJuros.toFixed(1)}`);
    }
else if((numeroDeParcelas >= 2) && (numeroDeParcelas <= 6)){
    valorDaCompra /= numeroDeParcelas;
    console.log(`O valor parcelado é: ${valorDaCompra.toFixed(1)}`);
}else{
    console.log("Número de parcelas invalído");
}


