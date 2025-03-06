// 21. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

// Función asincrónica para obtener datos desde un archivo JSON local
async function obtenerDatos() {
  try {
    // Realizar la petición al archivo JSON
    let respuesta = await fetch("datos.json");

    // Verificar si la respuesta es correcta
    if (!respuesta.ok) {
      throw new Error(
        `Error al cargar el archivo: ${respuesta.status} ${respuesta.statusText}`
      );
    }

    // Convertir la respuesta en JSON
    let datos = await respuesta.json();

    // Mostrar los datos obtenidos en la consola
    console.log("Datos obtenidos:", datos);
  } catch (error) {
    // Capturar errores y mostrar mensaje
    console.error("Hubo un error:", error.message);
  }
}

// Llamar a la función
obtenerDatos();
