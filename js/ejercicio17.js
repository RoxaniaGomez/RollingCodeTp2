/*Realiza un script que muestre la posición de la primera vocal 
de un texto introducido por teclado */
function ejer17() {
    let frase = prompt("ingrese una frase");
    frase = frase.toLowerCase();
    let posicion;

    for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) == "a" || frase.charAt(index) == "e" || frase.charAt(index) == "i" || frase.charAt(index) == "o" || frase.charAt(index) == "u") {
            posicion = index + 1;
            index = frase.length;
        }

    }
    document.getElementById("demo17").innerHTML = ("la primera vocal encontrada en la frase: <b>" + frase + "</b><br> esta en la posicion: <b>" + posicion + "</b> ");
}