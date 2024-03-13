import { render, renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Probando el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe regresar  un arreglo de imagenes y el loading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(
      //siempre va a retornar una promesa
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
