/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
 */
function ejer11() {
    let edad = [1, 2, 3];
    let nombre = ['a', 'b', 'c'];
    let aux;
    for (let index = 0; index < 3; index++) {
        aux = prompt("ingrese la edad del niño n " + (index + 1));
        edad[index] = parseInt(aux);
        nombre[index] = prompt("ingrese su nombre");
    }


    let posicion = edad.indexOf(Math.max(edad[0], edad[1], edad[2]));

    document.getElementById("demo11").innerHTML = ("el mayor es: " + nombre[parseInt(posicion)]);
}