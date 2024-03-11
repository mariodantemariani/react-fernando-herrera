import { getHeroeById, getHeroesByOnwner } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     //reject("no se pudo manejar el error");
//   }, 2000);
// });

// promesa
//   .then((variable) => {
//     console.log("then promesa", variable);
//   })
//   .catch((err) => console.log(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("no se encontro");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(114)
  .then((heroe) => console.log("Heroe", heroe))
  .catch((err) => console.warn(err));

// promesa
//   .then((variable) => {
//     console.log("then promesa", variable);
//   })
//   .catch((err) => console.log(err));
