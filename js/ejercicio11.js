/*Escribe un programa que pida un número y 
        nos diga si es divisible por 2, 3, 5 o 7 
      (hay que decir todos por los que es divisible)
 */
function boton11() {
    let num = prompt("ingrese un numero");
    let bandera = false;

    let resultado = "el numero " + num + " es divisible entre: ";

    if (parseInt(num) % 2 == 0) {
        resultado += "[2] ";
        bandera = true;
    }

    if (parseInt(num) % 3 == 0) {
        resultado += "[3] ";
        bandera = true;
    }

    if (parseInt(num) % 5 == 0) {
        resultado += "[5] ";
        bandera = true;
    }

    if (parseInt(num) % 7 == 0) {
        resultado += "[7] ";
        bandera = true;
    }
    if (bandera == true) {
        document.getElementById("demo11").innerHTML = (resultado);
    } else {
        document.getElementById("demo11").innerHTML = ("el numero " + num + " no  es divisible por 2,3,5 ni 7");
    }


}