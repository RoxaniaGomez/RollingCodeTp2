/*Haz un script que escriba una pirámide inversa de los números del 1 al número
 que indique el usuario (no mayor de 50) */
function ejer7() {
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
            for (let index = parseInt(num); index >= 1; index--) {
                for (let j = 0; j < index; j++) {

                    dibujo += '' + index;
                }

                dibujo += '<br>';
            }
        }
    } while (num <= 0 || num > 50 || isNaN(num));
    document.getElementById("demo7").innerHTML = (dibujo);
}