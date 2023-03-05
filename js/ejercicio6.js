/*Realiza un script que escriba una pirámide del 1 al 
30 de la siguiente forma :
1 
22 
333 
4444 
55555 
666666 
…….*/
for (let index = 1; index < 31; index++) {
    for (let j = 0; j < index; j++) {
        document.write(index);

    }
    document.write("<br>");
}