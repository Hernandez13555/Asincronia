// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

function map(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// Solicitar al usuario ingresar los datos
let input = prompt("Ingrese los números separados por comas:");
let numbers = input.split(",").map((num) => parseFloat(num.trim())); // Convertir a números

// Definir una función de callback (por ejemplo, duplicar los valores)
function double(num) {
  return num * 2;
}

// Aplicar la función map
let doubledNumbers = map(numbers, double);

console.log("Resultado:", doubledNumbers);
alert("Resultado: " + doubledNumbers.join(", "));
