/*Realiza un script que pida una cadena de texto y la 
devuelva al revés. Es decir, si tecleo 
“hola que tal” deberá mostrar “lat euq aloh */
function ejer16() {
    let frase = prompt("ingrese una frase");
    let frase2;
    let contador = frase.length;

    frase2 = "";
    for (var i = frase.length - 1; i >= 0; i--) {
        frase2 += frase[i];
    }

    document.getElementById("demo16").innerHTML = ("frase original: <b>" + frase + "</b> <br>frase inversa: <b>" + frase2 + "</b>");
}