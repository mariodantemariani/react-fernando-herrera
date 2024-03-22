import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "2KQpO@example.com",
  };

  test("should return default info", () => {
    const { result } = renderHook(() => useForm());

    expect(result.current).toEqual({
      formState: {},
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should return initialForm", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: "Fernando",
      email: "2KQpO@example.com",
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change name on form", () => {
    const newValue = "Fernando H.";

    const newFormState = {
      name: newValue,
      email: "2KQpO@example.com",
    };

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    expect(result.current.name).toBe(newValue);

    expect(result.current.formState.name).toEqual(newValue);

    expect(result.current).toEqual({
      name: newValue,
      email: "2KQpO@example.com",
      formState: newFormState,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should aplly on reset", () => {
    const newValue = "Fernando H.";

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;
    //aplico el act para cambiar el nombre
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });
    //verifico q haya cambiado
    expect(result.current.name).toBe(newValue);
    //aplico el reset
    act(() => {
      onResetForm();
    });
    //verifico q volvio al valor inicial
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
});
