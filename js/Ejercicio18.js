// 18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

function delay(ms, mensaje) {
  return new Promise((resolve) => {
    setTimeout(() => {
      alert(`Promesa resuelta: ${mensaje}`);
      resolve(mensaje);
    }, ms);
  });
}

// Crear tres Promises con diferentes tiempos
const promesa1 = delay(1000, "Primera promesa (1s)");
const promesa2 = delay(2000, "Segunda promesa (2s)");
const promesa3 = delay(3000, "Tercera promesa (3s)");

// Esperar a que todas las Promises se resuelvan
Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    alert("Todas las promesas se han resuelto", resultados);
  })
  .catch((error) => {
    console.error("Ocurrió un error en alguna promesa", error);
  });
