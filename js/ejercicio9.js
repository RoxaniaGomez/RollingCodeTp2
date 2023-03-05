/*Crea un script que escriba los números del 1 al 500, 
que indique cuáles son múltiplos de 4 y de 9 y que cada 
5 numeros muestre una
línea horizontal. Por ejemplo : */

for (let index = 1; index <= 500; index++) {
    document.write(index);
    if (index % 4 == 0) {
        document.write('(multiplo de 4)');
    }
    if (index % 9 == 0) {
        document.write('(multiplo de 9)');
    }
    if (index % 5 == 0) {
        document.write('<br>----------------');
    }
    document.write('<br>');

}