/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número
deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar”
deberá indicarse la suma total de los números
 introducidos.
 */
function ejer4() {
    let num;
    let concatenado = "";
    let suma = 0;
    do {
        num = prompt("ingrese un numero");
        parseInt(num);
        if (isNaN(num)) {
            window.alert("cuidado! debe ingresar numeros")
        } else {
            concatenado += num += '+';
            suma = suma + parseInt(num);
        }
    } while (confirm("desea ingresar otro numero?"));
    concatenado = concatenado.substring(0, concatenado.length - 1);

    document.getElementById("demo4").innerHTML = (concatenado + " = " + suma);

}

