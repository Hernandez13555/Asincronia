// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

// Solicitar al usuario ingresar los datos
let input = prompt("Ingrese los números separados por comas:");
let numbers = input.split(",").map((num) => parseFloat(num.trim())); // Convertir a números

// Función callback (verifica si el número es mayor a 10)
function isGreaterThanTen(num) {
  return num > 10;
}

// Aplicar la función every
let allGreaterThanTen = every(numbers, isGreaterThanTen);

// Mostrar resultado
console.log("Todos los números son mayores a 10:", allGreaterThanTen);
alert("Todos los números son mayores a 10: " + allGreaterThanTen);
