/*Realiza un script que cuente el número de vocales
 que tiene un texto */
function ejer15() {
    let frase = prompt("ingrese una frase");
    let contador = 0;
    frase = frase.toLowerCase();

    for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) == "a" || frase.charAt(index) == "e" || frase.charAt(index) == "i" || frase.charAt(index) == "o" || frase.charAt(index) == "u") {
            contador = contador + 1;
        }

    }
    document.getElementById("demo15").innerHTML = ("encontramos en la frase <b>" + frase + "</b> : <br> " + contador + " de vocales");
}