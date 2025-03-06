// 12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

async function operacionAsincronica() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Operación completada";
}

// Llamamos a la función y mostramos el resultado
operacionAsincronica().then(alert);
