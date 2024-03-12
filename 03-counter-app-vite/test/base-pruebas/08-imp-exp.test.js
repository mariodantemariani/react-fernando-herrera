import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-Imp-text.js", () => {
  test("get heroe by id debe retornar un heroe by Id", () => {
    const id = 1;

    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("dont exit hero get heroe by id debe retornar un heroe by Id", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });

  test("dont exit hero get heroe by id debe retornar un heroe by Owner", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toEqual(3);
  });

  test("dont exit hero get heroe by id debe retornar un heroe by Owner", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toEqual(2);
  });

  test("dont exit hero get heroe by id debe retornar un heroe by Owner", () => {
    const owner = "no";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toEqual(0);
  });
});
