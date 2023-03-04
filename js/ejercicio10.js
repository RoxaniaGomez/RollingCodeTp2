/*Escribe un programa que pida un número y 
nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro) */
function boton10() {
    let num = prompt("ingrese un numero");

    if (parseInt(num) % 2 == 0 || parseInt(num) % 3 == 0 || parseInt(num) % 5 == 0 || parseInt(num) % 7 == 0) {
        document.getElementById("demo10").innerHTML = ("el numero es divisible entre 2 o 3 o 5 o 7");

    } else {
        document.getElementById("demo10").innerHTML = ("el numero no es divisible entre 2 ni 3 ni 5 ni 7");
    }


}