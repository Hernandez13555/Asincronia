// 16. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

fetch("datos.json") // Asegúrate de que la ruta es correcta
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }
    return response.json();
  })
  .then((data) => {
    // Filtrar nombres que comienzan con "A"
    const nombresConA = data.usuarios.filter((usuario) =>
      usuario.nombre.startsWith("A")
    );

    // Mostrar los nombres filtrados en la consola
    console.log("Usuarios cuyos nombres comienzan con 'A':", nombresConA);
  })
  .catch((error) => console.error("Error al obtener los datos:", error));
