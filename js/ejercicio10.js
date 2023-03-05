/*Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden
 descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
function ejer10() {
    let fila = prompt("ingrese numero de fila");
    let columna = prompt("ingrese el numero de columnas");
    contador = (parseInt(fila) * parseInt(columna));

    let dibujo = '';
    for (let index = 0; index < (parseInt(fila) * parseInt(columna)); index++) {

        if (index % columna == 0 && index != 0) {
            if (contador < 10) {
                dibujo += '<br>[0' + contador + ']';
                contador--;
            } else {
                dibujo += '<br>[' + contador + ']';
                contador--;
            }

        } else {
            if (contador < 10) {
                dibujo += '[0' + contador + ']';
                contador--;
            } else {
                dibujo += '[' + contador + ']';
                contador--;
            }

        }
    }
    document.getElementById("demo10").innerHTML = (dibujo);


}