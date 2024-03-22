import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe retornar los valores por defecto-counter", () => {
    const { result } = renderHook(() => useCounter());

    const { counter } = result.current;

    expect(counter).toBe(10);
  });

  test("Debe retornar los valores por defecto-increment", () => {
    const { result } = renderHook(() => useCounter());

    const { increment } = result.current;

    expect(increment).toEqual(expect.any(Function));
  });

  test("Debe retornar los valores por defecto-decrement", () => {
    const { result } = renderHook(() => useCounter());

    const { decrement } = result.current;

    expect(decrement).toEqual(expect.any(Function));
  });

  test("Debe retornar los valores por defecto-reset", () => {
    const { result } = renderHook(() => useCounter());

    const { reset } = result.current;

    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe generar el counter con el valor 100", () => {
    const { result } = renderHook(() => useCounter(100));
    //const { counter } = result.current;
    expect(result.current.counter).toBe(100);
  });

  test("Debe incrementar el counter en 10", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment(10);
    });
    expect(result.current.counter).toBe(110);
  });

  test("Debe decrementar el counter en 11", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(10);
    });
    expect(result.current.counter).toBe(89);
  });

  test("Debe de resetear el contador", () => {
    const defaultValue = 100;
    const { result } = renderHook(() => useCounter(defaultValue));
    const { increment, decrement, reset } = result.current;
    act(() => {
      increment(10);
      decrement();
      decrement(10);
      reset();
    });
    expect(result.current.counter).toBe(defaultValue);
  });
});
