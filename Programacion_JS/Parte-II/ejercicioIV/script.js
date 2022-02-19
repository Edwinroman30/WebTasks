const winPromt = window.prompt(`Elija en tipo de figura a calcular el área: \n1)Círculo.\n2)Triángulo.\n3)Rectángulo.`);

const $figure = document.getElementById('figure');
const $property = document.getElementById('property');

switch(Number.parseInt(winPromt)){

    case 1:
    {
            let radio = prompt('Ingrese el radio del circulo:');
            let area = Math.PI*Math.pow(radio,2);
            $figure.classList.add('border','border-warning','rounded-circle');
            $figure.style.cssText = "width:100px; height:100px;";
            $property.innerHTML = `<b>Radio:</b> ${radio} <hr> <b>Area</b>: ${area}`;
            break;
    }
    case 2:{
        
        let base = prompt('Ingrese la base:');
        let altura = prompt('Ingrese la altura:');
        let area = (base*altura)/2;
        $figure.classList.add('border','border-warning');
        $figure.classList.add('triangle');
        $figure.style.cssText = "width:100px; height:100px;";
        $property.innerHTML = `<b>Base:</b> ${base} <hr> <b>Altura</b>: ${altura} <hr> <b>Area</b>: ${area}`;
        break;
    }
    case 3:{
        let base = prompt('Ingrese la base:');
        let altura = prompt('Ingrese la altura:');
        let area = (base*altura);
        $figure.classList.add('border','border-warning');
        $figure.style.cssText = "width:100px; height:100px;";
        $property.innerHTML = `<b>Base:</b> ${base} <hr> <b>Altura</b>: ${altura} <hr> <b>Area</b>: ${area}`;
        break;
    }

}