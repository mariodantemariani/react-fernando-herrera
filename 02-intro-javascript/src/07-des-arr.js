const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const seState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = seState("Goku");

console.log(nombre);
setNombre();

const usarState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre2, setNombre2] = usarState("Tony");
console.log(nombre2, setNombre2);
