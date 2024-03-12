const { getHeroeByIdAsync } = require("../../src/base-pruebas/09-promesas");

describe("Pruebas en 09-promesas", () => {
  test("should execute getHeroeByIdAsync debe retornanr un heroe usando then", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      //done terminó
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("should execute getHeroeByIdAsync debe obtener error si heroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe:" + id);
      done();
    });
  });

  test("should execute getHeroeByIdAsync todo junto", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toEqual({
          id: 1,
          name: "Batman",
          owner: "DC",
        });
        done;
      })
      .catch((error) => {
        expect(error).toBe("No se pudo encontrar el héroe:" + id);
        done();
      });
  });
});
