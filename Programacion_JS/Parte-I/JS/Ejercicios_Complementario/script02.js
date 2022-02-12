/* 2. Realice una página web que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales),
isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad */

let triaEquilatero = 0,
    triaIsosceles = 0,
    triaEscaleno = 0;

const data = [
    [],
    []
];

const loadData = () =>{


    for (let i = 0; i < 4; i++) {
       
        let vector = [];

        for (let x = 0; x < 3; x++) {
       
          let sides = parseInt( prompt( `Ingrese los lados del triangulo ${i+1}:`) );
          vector.push( isNaN(sides)? 0:sides );
        }
        
        data[0].push(vector);
    }

    console.log(data);
} 

const groupData = () =>{

    //Face de agrupacion
    data[0].forEach(sides => {
        const [a,b,c] = sides;
        if(a == b && a==c && b == c){               //TOdo iguales
            triaEquilatero += 1;
        }else if( (a == b || a == c) || ( b==c ) ){ // SINO Al menos dos iguales
            triaIsosceles += 1;
        }else{                                      // ENTONCES NINGUNOS.
            triaEscaleno += 1;
        }
    });

    //Construccion de un objeto a mi favor, para saber el resultado.
    data[1].push(
        {
           type: 'Tria. Equilatero',
           sidesNum: triaEquilatero
        },
        {
            type: 'Tria. Isosceles',
            sidesNum: triaIsosceles
         },
         {
            type: 'Tria. Escaleno',
            sidesNum: triaEscaleno
         }
    );
}

//Execution of the script:
loadData();
groupData();

//Edwin Roman (202010233)
//90's music : https://www.youtube.com/watch?v=phaJXp_zMYM