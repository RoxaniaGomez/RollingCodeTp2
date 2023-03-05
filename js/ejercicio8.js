/*Crea script para generar pirámide siguiente con los números del 1 al número
 que indique el usuario (no mayor de 50)
 1
 12
 123
 1234*/
function ejer8() {
    let num;
    let dibujo = '';
    do {
        num = prompt("ingrese un numero");
        num = parseInt(num);
        if (isNaN(num)) {
            window.alert("debe ingresar un numero");
        } else if (num <= 0 || num > 50) {
            window.alert("el numero debe estar entre 1 y 50")
        } else if (num > 0 && num <= 50) {
            for (let index = 1; index < num + 1; index++) {
                for (let j = 1; j < index + 1; j++) {

                    dibujo += '' + j;
                }

                dibujo += '<br>';
            }
        }
    } while (num <= 0 || num > 50 || isNaN(num));
    document.getElementById("demo8").innerHTML = (dibujo);
}