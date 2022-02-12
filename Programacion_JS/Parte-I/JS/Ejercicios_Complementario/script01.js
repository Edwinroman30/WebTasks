/* 
1. Realice una página web que solicite el ingreso alguna de estas palabras (casa, mesa,
   perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa'
   debemos mostrar el texto 'house' en la página.
*/

const input = prompt(`Ingrese la palabra a traducir:\ncasa, mesa, perro, gato`);
const words = ['casa','mesa','perro', 'gato'];

function translator(word){

    switch(word){
        case 'casa':
            return 'Home';
            break;
        case 'mesa':
            return 'Table';
            break;
        case 'perro':
            return 'Dog';
        break;
        case 'gato':
            return 'Cat';
            break;
        default:
            console.log('YOur selection is out of the range, please try again.');
            break;
    }
}

alert(translator(input));