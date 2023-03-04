/*Escribe un programa que pida una frase y escriba
         las vocales que aparecen
Nota: Tener en cuenta la función length y substring
 o charAt (developer mozilla) */
function boton9() {
    let frase = prompt("ingrese una frase");
    let letraA = 0;
    let letraE = 0;
    let letraI = 0;
    let letraO = 0;
    let letraU = 0;


    for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) == "a" || frase.charAt(index) == "A") {
            letraA = letraA + 1;
        } else if (frase.charAt(index) == "e" || frase.charAt(index) == "E") {
            letraE = letraE + 1;
        }
        else if (frase.charAt(index) == "i" || frase.charAt(index) == "I") {
            letraI = letraI + 1;
        }
        else if (frase.charAt(index) == "o" || frase.charAt(index) == "O") {
            letraO = letraO + 1;
        }
        else if (frase.charAt(index) == "u" || frase.charAt(index) == "U") {
            letraU = letraU + 1;
        }

    }
    document.getElementById("demo9").innerHTML = ("encontramos en la frase <b>" + frase + "</b> : <br> " + letraA + " letras A<br>" + letraE + " letras E<br>" + letraI + " letras I<br>" + letraO + " letras O<br>" + letraU + " letras U<br>");

}