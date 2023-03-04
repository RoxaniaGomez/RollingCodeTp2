/*Escribe un programa que pida 3 números y
 escriba en la pantalla el mayor de los tres. */
function boton4() {
    let num = prompt("ingrese primer numero");
    let num2 = prompt("ingrese segundo numero");
    let num3 = prompt("ingrese tercer numero");


    document.getElementById("demo4").innerHTML = ("el mayor es : " + Math.max(parseInt(num), parseInt(num2), parseInt(num3)));

}