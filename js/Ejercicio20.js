// 20. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

// Función asincrónica simulada (simula una operación asíncrona como una API)
async function procesarElemento(elemento, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      alert(`Elemento procesado: ${elemento}`);
      resolve(`Resultado de ${elemento}`);
    }, tiempo);
  });
}

// Función para solicitar elementos al usuario y procesarlos
async function iniciarProcesamiento() {
  const elementos = prompt("Ingrese los elementos separados por comas:").split(
    ","
  );

  alert("Iniciando procesamiento...");
  for (const elemento of elementos) {
    await procesarElemento(elemento.trim(), 1000); // Procesa cada elemento con 1s de espera
  }

  alert("Todos los elementos han sido procesados.");
}

// Llamar a la función para iniciar
iniciarProcesamiento();
