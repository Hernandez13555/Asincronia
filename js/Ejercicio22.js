// 22. Crear un objeto proxy usando la clase Proxy

// Objeto vacío donde se guardarán los datos ingresados
let persona = {};

// Manejador del Proxy con métodos get y set
let manejador = {
  get(objeto, propiedad) {
    if (propiedad in objeto) {
      alert(`Accediendo a "${propiedad}": ${objeto[propiedad]}`);
      return objeto[propiedad];
    } else {
      console.warn(`La propiedad "${propiedad}" no existe.`);
      return undefined;
    }
  },
  set(objeto, propiedad, valor) {
    if (propiedad === "edad" && isNaN(valor)) {
      console.error("La edad debe ser un número.");
      return false;
    }
    alert(`Modificando "${propiedad}" con el valor: ${valor}`);
    objeto[propiedad] = valor;
    return true;
  },
};

// Crear el Proxy
let proxyPersona = new Proxy(persona, manejador);

// Solicitar datos al usuario
proxyPersona.nombre = prompt("Ingrese su nombre:");
proxyPersona.edad = parseInt(prompt("Ingrese su edad:"));
proxyPersona.ciudad = prompt("Ingrese su ciudad:");

// Mostrar los datos ingresados
alert("Datos de la persona:", proxyPersona);
alert(
  `Nombre: ${proxyPersona.nombre}\nEdad: ${proxyPersona.edad}\nCiudad: ${proxyPersona.ciudad}`
);
