const { Alert } = require("bootstrap");

function ejer2() {
    let nota;
    do {

        nota = prompt("Ingresa la nota del Alumno:");
        switch (parseInt(nota)) {
            case 0:
            case 1:
            case 2:

                window.alert("Muy deficiente");

                break;
            case 3:
            case 4:

                window.alert("Insuficiente");

                break;
            case 5:
            case 6:

                window.alert("Suficiente");
                break;
            case 7:

                window.alert("Bien");
                break;
            case 8:
            case 9:

                window.alert("Notable");
                break;
            case 10:
                window.alert("Sobresaliente");
                break;

            default:
                if (isNaN(nota)) {
                    window.alert("Introdujo caracteres, Introduzca un número válido");
                } else {
                    window.alert("número erróneo, debe ser un numero entre 0 y 10");
                }
                break;
        }

    } while (parseInt(nota) < 0 || parseInt(nota) > 10 || isNaN(nota) === true);
}