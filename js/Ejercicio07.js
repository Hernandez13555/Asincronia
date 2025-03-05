// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

// Solicitar al usuario ingresar los datos
let input = prompt("Ingrese los números separados por comas:");
let numbers = input.split(",").map((num) => parseFloat(num.trim())); // Convertir a números

// Función callback (verifica si el número es mayor a 10)
function isGreaterThanTen(num) {
  return num > 10;
}

// Aplicar la función find
let firstGreaterThanTen = find(numbers, isGreaterThanTen);

// Mostrar resultado
console.log("Primer número mayor a 10:", firstGreaterThanTen);
alert(
  "Primer número mayor a 10: " +
    (firstGreaterThanTen !== undefined ? firstGreaterThanTen : "Undefined")
);
