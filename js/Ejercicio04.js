// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// Solicitar al usuario ingresar los datos
let input = prompt("Ingrese los números separados por comas:");
let numbers = input.split(",").map((num) => parseFloat(num.trim())); // Convertir a números

// Definir una función de callback (por ejemplo, filtrar números mayores a 10)
function isGreaterThanTen(num) {
  return num > 10;
}

// Aplicar la función filter
let filteredNumbers = filter(numbers, isGreaterThanTen);

console.log("Números mayores a 10:", filteredNumbers);
alert("Números mayores a 10: " + filteredNumbers.join(", "));
