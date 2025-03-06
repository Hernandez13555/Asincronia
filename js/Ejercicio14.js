// 14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

function delay(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      alert(`Promesa resuelta con: ${numero}`);
      resolve(numero);
    }, 1000);
  });
}

// Crear las promesas y encadenarlas correctamente
const promesa1 = delay(5);
const promesa2 = promesa1.then((resultado1) =>
  delay(10).then((resultado2) => resultado1 + resultado2)
);
const promesa3 = promesa2.then((resultado2) =>
  delay(15).then((resultado3) => resultado2 + resultado3)
);

promesa3.then((resultadoFinal) => {
  alert(`Resultado final: ${resultadoFinal}`);
});
