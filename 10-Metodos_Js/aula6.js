//split(delimiter[, limit]);

let texto = "maçã,banana,laranja,uvas";
// let frutas = texto.split(","); //delimitador ,
//let frutasLimite = texto.split(",", 4) // delimitador + limite de elementos da nossa lista
// let frutas0 = texto.split();
// console.log(frutas0);

let frutas = texto.split(/\s+/);
let frutasLimite = texto.split(",", 3) // delimitador + limite de elementos da nossa lista
console.log(frutas);
console.log(frutasLimite);
//splice
frutasLimite.splice(1, 2);
console.log(frutasLimite);
