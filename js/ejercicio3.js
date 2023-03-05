/*Realiza un script que pida cadenas de texto  hasta
 que se pulse “cancelar”. Al salir con “cancelar” deben 
 mostrarse todas las cadenas concatenadas con un guión -. */

function ejer3() {

    let text;
    let concatenado = '';
    do {

        text = prompt("ingrese cadena");
        concatenado += text += '-';
    } while (confirm("desea ingresar otra cadena?"));

    concatenado = concatenado.substring(0, concatenado.length - 1);


    document.getElementById("demo3").innerHTML = (" ingreso: " + concatenado);

}