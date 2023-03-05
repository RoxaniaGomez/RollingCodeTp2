/*Realiza un script que pida una cadena de texto y lo 
muestre poniendo el signo – entre cada carácter sin usar
 el método replace. */
function ejer14() {
    let frase = prompt("ingrese una frase");
    let frase2 = "";
    for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) !== " ") {
            frase2 += frase.charAt(index) + "-";
        }

    }

    frase2 = frase2.substring(0, frase2.length - 1);

    document.getElementById("demo14").innerHTML = (frase2);
}