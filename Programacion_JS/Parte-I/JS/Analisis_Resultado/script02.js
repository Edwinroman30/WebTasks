/* 2. Realice una página web que permita cargar un número entero positivo de hasta tres
cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.
 */

let number = prompt('Íngrese un numero:');
let rgx = /\d/;


if(rgx.test(number)){

    number = parseInt(number);

    if(number > 0 && number <=9)
        alert('Contine una (1) cifra.');
    if(number > 9 && number <100)
        alert('Contine dos (2) cifras.');
    if(number > 100 && number < 1000)
        alert('Contine tres (3) cifras.');

}else{
    alert('Error: debe de ser un numero.');
}