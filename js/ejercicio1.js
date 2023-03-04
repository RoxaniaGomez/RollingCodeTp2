
function ejer1() {
    let edad;
    do {
        edad = prompt("Ingresa tu edad:");
        edad = parseInt(edad);
        if (edad >= 0 && edad < 16) {
            document.getElementById("res1").innerHTML = ("Eres menor de 18 años, aun no puedes conducir.");
        } else if (edad >= 16 && edad < 18) {
            document.getElementById("res1").innerHTML = ("Puedes Conducir, pero con autorizacion de tus padres ademas del carnet.");
        } else if (edad >= 18 && edad < 65) {
            document.getElementById("res1").innerHTML = ("Puedes Conducir, recuerda sacar el carnet que te habilita para este proposito.");
        } else if (edad >= 65 && edad < 70) {
            document.getElementById("res1").innerHTML = ("Puedes Conducir, pero debes renobar el carnet cada 5 años.");
        } else if (edad >= 70 && edad < 122) {
            document.getElementById("res1").innerHTML = ("Puedes Conducir, pero debes renobar el carnet cada año.");
        } else if (edad < 0 || edad > 122) {
            alert("Ingresaste mal tu edad, Intentalo nuevamente:");

        }

    } while (edad < 0 || edad > 122);



}