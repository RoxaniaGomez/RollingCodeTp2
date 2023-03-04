/*4.- Escribe un programa de dos líneas que pida el nombre
 del usuario con un prompt y escriba un texto que diga 
 «Hola nombreUsuario»
 */

function boton() {
    let nombreUsuario = prompt("ingrese su nombre");
    document.getElementById("demo").innerHTML = ("Hola " + nombreUsuario);

}

