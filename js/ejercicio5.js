function ejer5() {
    let num;
    let caracter = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    do {
        num = prompt("ingrese su dni");
        num = parseInt(num);
        if (isNaN(num)) {
            window.alert("cuidado! debe ingresar numeros");
        } else if (num >= 0 && num <= 99999999) {
            window.alert("la letra que le corresponde es " + caracter[num % 23]);

        } else {
            window.alert("el numero ingresado es incorrecto");
        }
    } while (confirm("desea buscar la letra que le corresponde a otro dni?"));
}