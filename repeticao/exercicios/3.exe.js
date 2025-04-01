const texto = "Oláhhh mundo";
let temLetraH = false;

for (const letra of texto) {
    if ((letra === "h") || (letra === "H")) {
        console.log("Tem a letra h");
        temLetraH = true;
        break;
    }
}

if (!temLetraH) {
    console.log("Não tem letra h");
}