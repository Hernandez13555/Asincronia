// 13. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

const miPromesa = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rechazada");
  }, 2000);
});

miPromesa
  .then(alert) // No se ejecutará porque la promesa se rechaza
  .catch((error) => alert("Error: Promise rechazada", error));
