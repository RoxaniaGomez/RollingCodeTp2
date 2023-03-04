/*Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt */
function boton2() {
    let num = prompt("ingrese primer numero");
    let num2 = prompt("ingrese segundo numero");


    document.getElementById("demo2").innerHTML = ("la suma da : " + (parseInt(num) + parseInt(num2)));

}