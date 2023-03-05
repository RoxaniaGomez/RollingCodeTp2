function ejer6() {
    let dibujo = "";
    for (let index = 1; index < 31; index++) {
        for (let j = 0; j < index; j++) {

            dibujo += index;
        }
        dibujo += "<br>";
    }
    document.getElementById("demo6").innerHTML = (dibujo);
}