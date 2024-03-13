import { render, screen } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("Debe retornar un arreglo", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBeGreaterThan(0);
  });

  test("Debe retornar un arreglo con la estructura deseada", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
