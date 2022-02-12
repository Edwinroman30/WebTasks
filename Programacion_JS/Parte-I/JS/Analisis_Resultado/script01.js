/* 1. Realice una página web que cargue por teclado tres números distintos. Mostrar por
pantalla el mayor y menor de ellos, no debe de aceptar números negativos ni números
iguales.
 */


const main = () =>{
    
    let numbers = [];
    let rgx = /\d/;
    let til = 3;


    for (let index = 0; index < til; index++) {
        
        let tempNumber = prompt('Por favor, ingrese un numero:'); 
        
        if( rgx.test(tempNumber) ){

            if( parseInt(tempNumber) < 0 || numbers.includes( parseInt(tempNumber) ) ){
                    alert('El numero, no puede ser igual o negativo');
                    return;
            }else{
                
                numbers.push( parseInt(tempNumber) );
            }

        }else{
            til += 1;
            alert('Por favor, debe de ingresar un numero.');
        }
    }

    console.log(Math.max(...numbers));
    console.log(Math.min(...numbers))
    console.log(numbers);   
}


main();