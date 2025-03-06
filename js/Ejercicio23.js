// 23. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

// Definir un objeto vacío para almacenar los datos
let datos = {};

// Definir el manejador del Proxy con validaciones estrictas
let manejador = {
  set(objeto, propiedad, valor) {
    if (typeof valor !== "string") {
      console.error(`Error: "${propiedad}" debe ser un texto.`);
      return false;
    }

    // Eliminar espacios en blanco al inicio y al final
    valor = valor.trim();

    // Verificar si el valor está vacío después de quitar espacios
    if (valor === "") {
      console.error(
        `Error: "${propiedad}" no puede estar vacío ni contener solo espacios.`
      );
      return false;
    }

    // Validaciones según el tipo de dato
    if (propiedad === "edad") {
      // Validar que sea numérico
      if (!/^\d+$/.test(valor)) {
        console.error(`Error: "${propiedad}" debe ser un número entero.`);
        return false;
      }
    } else if (propiedad === "nombre") {
      // Validar que sea solo letras
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(valor)) {
        console.error(
          `Error: "${propiedad}" solo debe contener letras sin espacios.`
        );
        return false;
      }
    } else if (propiedad === "email") {
      // Validar que sea un correo válido
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
        console.error(`Error: "${propiedad}" debe ser un correo válido.`);
        return false;
      }
    } else if (propiedad === "fecha") {
      // Validar que sea una fecha en formato YYYY-MM-DD
      if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
        console.error(
          `Error: "${propiedad}" debe tener el formato YYYY-MM-DD.`
        );
        return false;
      }
    } else {
      console.warn(
        `Advertencia: No se ha definido validación para "${propiedad}".`
      );
    }

    // Si pasa la validación, asignamos el valor
    objeto[propiedad] = valor;
    alert(`"${propiedad}" se estableció como: ${valor}`);
    return true;
  },
};

// Crear el Proxy
let proxyDatos = new Proxy(datos, manejador);

// Solicitar datos al usuario y aplicar validaciones
proxyDatos.nombre = prompt("Ingrese su nombre (sin espacios):"); // Solo letras, sin espacios
proxyDatos.edad = prompt("Ingrese su edad (solo números):"); // Solo números
proxyDatos.email = prompt("Ingrese su correo electrónico:"); // Formato de email
proxyDatos.fecha = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):"); // Formato de fecha

// Mostrar los datos guardados
alert("Datos ingresados:", proxyDatos);
