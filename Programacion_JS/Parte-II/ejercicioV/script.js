let mes = prompt("Ingrese en texto el mes: ");
let year = prompt("Ingrese el año: ");
let diasdelmes = 30;

let bisiesto = false;

if(year%4 == 0 && (year%100 != 0 || year%400 == 0)){
    bisiesto = true;
}

switch(mes.toLowerCase()){
    case "enero":
    break;
    case 'febrero':
        if(bisiesto)
            diasdelmes = 29;
        else
            diasdelmes = 28;
    break;
    case "marzo":
        break;
    case 'abril':
        break;
    case "mayo":
        break;
    case "junio":
        break;
    case "julio":
        break;
    case "agosto":
        break;
    case "octubre":
        break;
    case "diciembre":
        diasdelmes = 31;
        break;
    default:
        alert("El mes " + mes + " no existe");
        mes = "No existe";
        diasdelmes = 0;
        break;
}

if(bisiesto == true){
    var msg = "El año " + year + " es bisiesto. El mes de " + mes + " tiene " +
    diasdelmes + " días.";
}
else{
    var msg = "El mes de " + mes + " tiene " + diasdelmes + " días.";
}
alert(msg);    