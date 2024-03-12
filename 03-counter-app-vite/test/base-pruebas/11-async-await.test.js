const { getImagen } = require("../../src/base-pruebas/11-async-await");

jest.useRealTimers();

describe("Pruebas en 11-Async", () => {
  test("debe retornar el url", async (done) => {
    jest.setTimeout(20000);

    const url = await getImagen();
    expect(typeof url).toBe("string");
    done();
  });

  test("no debe retornar el url", async (done) => {
    jest.setTimeout(10000);
    const response = await getImagen();
    expect(response).toBe("No se encontro la imagen");
    done();
  });
});
