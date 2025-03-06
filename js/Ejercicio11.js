// 11. Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.

const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa resuelta");
  }, 3000);
});

miPromesa.then((mensaje) => alert(mensaje));
