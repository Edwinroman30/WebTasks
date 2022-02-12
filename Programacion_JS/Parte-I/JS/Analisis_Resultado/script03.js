/* 3. Realice una página web que lea por teclado dos números, si el primero es mayor al
segundo informar su suma y diferencia, en caso contrario informar el producto y la
división del primero respecto al segundo. */


const main = () =>{

    const rgx = /\d/;
    const numbers = [];
    let tempNumber;

    for (let i = 0; i < 2; i++) {
        
        tempNumber = prompt('Ingrese un numero: ');

        if( rgx.test(tempNumber) ){
            numbers.push( parseInt(tempNumber) );
        }else{
            alert('Error: Inicie el programa de nuevo, dado a que debe ingresar SOLO numeros.');
            return;
        }
        
    }

    if(numbers[0] > numbers[1]){
       alert(`${numbers[0]} + ${numbers[1]} = ${numbers[0]+numbers[1]} \n ${numbers[0]} - ${numbers[1]} = ${numbers[0]-numbers[1]}`);
    }else{
        alert(`${numbers[0]} * ${numbers[1]} = ${numbers[0]*numbers[1]} \n ${numbers[0]} / ${numbers[1]} = ${numbers[0]/numbers[1]}`);
    }
    

} 

main();