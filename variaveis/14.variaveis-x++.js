let x = 10;

// Incrementa 
// O operador retorna o valor atual da variável antes de incrementá-la.
// O incremento acontece depois que o valor foi usado.
x++;
console.log(x);
// Decrementa
x--;
console.log(x);

// O operador incrementa o valor da variável antes de retorná-lo.
// Assim, o retorno é do novo valor da variável.
let y = ++x;
console.log(`X: ${x}, Y: ${y}`);