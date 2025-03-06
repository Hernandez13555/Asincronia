// 17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function obtenerUsuarios() {
  try {
    const response = await fetch("datos.json"); // Asegúrate de que la ruta es correcta
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }

    const data = await response.json(); // Convertir a JSON

    // Extraer solo los nombres y edades de los usuarios
    const usuariosInfo = data.usuarios.map((usuario) => ({
      nombre: usuario.nombre,
      edad: usuario.edad,
    }));

    // Mostrar en la consola
    console.log("Usuarios:", usuariosInfo);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

// Llamar a la función
obtenerUsuarios();
