/*Realiza un script que pida un texto y lo muestre en mayúsculas. */
function ejer13() {
    let frase;
    frase = prompt("ingrese una frase");

    document.getElementById("demo13").innerHTML = (frase.toUpperCase());
}