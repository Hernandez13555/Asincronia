// 19. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

function crearPromesa(ms, mensaje, rechazar = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rechazar) {
        alert(`Promesa rechazada: ${mensaje}`);
        reject(`Error: ${mensaje}`);
      } else {
        alert(`Promesa resuelta: ${mensaje}`);
        resolve(mensaje);
      }
    }, ms);
  });
}

// Crear tres Promises (algunas resueltas y otras rechazadas)
const promesa1 = crearPromesa(1000, "Primera promesa (1s)");
const promesa2 = crearPromesa(2000, "Segunda promesa (2s)", true); // Se rechaza
const promesa3 = crearPromesa(3000, "Tercera promesa (3s)");

// Usar Promise.allSettled() para manejar todas las promesas
Promise.allSettled([promesa1, promesa2, promesa3]).then((resultados) => {
  alert("Resultados de todas las promesas:", resultados);
});
