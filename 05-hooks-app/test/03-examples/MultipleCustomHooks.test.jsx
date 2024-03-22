import { render, screen, fireEvent } from "@testing-library/react";

import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

import { useFetch } from "../../src/hooks/useFetch";

import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useCounter");
jest.mock("../../src/hooks/useFetch");

describe("Prueba en MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
  });

  beforeEach(() => jest.clearAllMocks());

  test("should be the same that snapShot", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    const { container } = render(<MultipleCustomHooks />);
    expect(container).toMatchSnapshot();
  });

  test("should render default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText("MultipleCustomHooks")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).not.toBeTruthy();

    const previousButton = screen.getByRole("button", { name: "Anterior" });
    expect(previousButton.disabled).toBeTruthy();
  });

  test("should render pokemon card", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        },
      },
      error: null,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const text = "Bulbasaur";
    expect(screen.getByText(text)).toBeTruthy();

    const previousButton = screen.getByRole("button", { name: "Anterior" });
    expect(previousButton.disabled).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).not.toBeTruthy();
    //    screen.debug();
  });

  test("Should call increment and decrement", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        },
      },
      error: null,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
