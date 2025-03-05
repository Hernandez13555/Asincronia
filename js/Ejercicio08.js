// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
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

// Aplicar la función findIndex
let indexFirstGreaterThanTen = findIndex(numbers, isGreaterThanTen);

// Mostrar resultado
console.log("Índice del primer número mayor a 10:", indexFirstGreaterThanTen);
alert(
  "Índice del primer número mayor a 10: " +
    (indexFirstGreaterThanTen !== undefined
      ? indexFirstGreaterThanTen
      : "Undefined")
);
