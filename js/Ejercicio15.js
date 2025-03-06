// 15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

fetch("datos.json") // Asegúrate de que el archivo `datos.json` esté en la misma carpeta que el script
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.status}`);
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then((data) => {
    console.log("Datos obtenidos:", data);
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });
