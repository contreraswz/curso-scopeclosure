var firstName; //sino asigno valor, se asigna un valor por defecto "UNDEFINED"
firstName="EDWIN CONTRERAS";
console.log(firstName);


var lastName = "DANTE CONT";
console.log(lastName);

var secondName="pato";
var secondName="perro";

console.log(secondName);


let fruit = "manzana";
fruit ="kiwi";// si deja reasignar siempre que no se declare nuevamente
// let fruit ="banana"; no se puede asignar y redeclarar un variable LET en el mismo BLOCK-SCOPE


//const
const animal = "perruno";
//animal = "gatuno"; no se puede reasignar

const vehicles = [];
vehicles.push("carro");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

vehicles.push("perro");
console.log(vehicles)