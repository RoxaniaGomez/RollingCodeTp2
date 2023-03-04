/*Escribe un programa que pida dos números 
y escriba en la pantalla cual es el mayor.*/

function boton3() {
    let num = prompt("ingrese primer numero");
    let num2 = prompt("ingrese segundo numero");


    document.getElementById("demo3").innerHTML = ("el mayor es : " + Math.max(parseInt(num), parseInt(num2)));

}