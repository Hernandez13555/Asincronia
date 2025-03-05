// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

// Solicitar al usuario ingresar los datos
let input = prompt("Ingrese los números separados por comas:");
let numbers = input.split(",").map((num) => parseFloat(num.trim())); // Convertir a números

// Función callback (verifica si el número es mayor a 10)
function isGreaterThanTen(num) {
  return num > 10;
}

// Aplicar la función some
let someGreaterThanTen = some(numbers, isGreaterThanTen);

// Mostrar resultado
console.log("Al menos un número es mayor a 10:", someGreaterThanTen);
alert("Al menos un número es mayor a 10: " + someGreaterThanTen);
