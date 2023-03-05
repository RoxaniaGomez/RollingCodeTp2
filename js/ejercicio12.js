/*
Realiza un script que genere un número aleatorio entre 1 y 99*/
function ejer12() {
    // repetir con el intervalo de 2 segundos
    let timerId = setInterval(() => document.getElementById("demo12").innerHTML = ("el ganador es: " + Math.floor(Math.random() * 100)), 100);

    // después de 5 segundos parar
    setTimeout(() => { clearInterval(timerId); document.getElementById("demo12").innerHTML = ("el ganador es: " + Math.floor(Math.random() * 100)), 1000; }, 5000);

}