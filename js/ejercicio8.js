/*Escribe un programa que pida un número
 y diga si es divisible por 2 */
function boton5() {
    let num = prompt("ingrese un numero entero");
    if (parseInt(num) % 2 == 0) {
        document.getElementById("demo5").innerHTML = ("el numero es divisible en 2");

    } else {
        document.getElementById("demo5").innerHTML = ("el numero no es divisible en 2");

    }



}