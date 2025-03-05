// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:

// • Usando setTimeout anidado.

function imprimirNumerosTimeout(desde, hasta) {
  let numeroActual = desde; // Inicialización del contador

  function imprimir() {
    console.log(numeroActual); // Salida del número actual

    if (numeroActual < hasta) {
      numeroActual++; // Incremento del contador
      setTimeout(imprimir, 1000); // Llamado recursivo con retraso de 1 segundo
    }
  }

  imprimir(); // Inicio de la recursión
}

imprimirNumerosTimeout(1, 5);

// • Usando setInterval.

// function imprimirNumerosInterval(desde, hasta) {
//   let numeroActual = desde; // Inicialización del contador

//   let intervalo = setInterval(() => {
//     console.log(numeroActual); // Salida del número actual

//     if (numeroActual === hasta) {
//       clearInterval(intervalo); // Cancela la ejecución periódica cuando se alcanza el límite
//     }

//     numeroActual++; // Incremento del contador
//   }, 1000); // Intervalo de ejecución de 1 segundo
// }

// imprimirNumerosInterval(1, 5);
