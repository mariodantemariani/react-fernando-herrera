import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("Should match with snapshoot", () => {
    render(<GifExpertApp />);

    //asserts
    expect(container).toMatchSnapshot();
  });

  //hay q testear onAddCategory

  // describe("Test on <GifExpertApp/>", () => {
  //   const category = "Dragon ball";

  //   test("renders GifExpertApp component correctly", () => {
  //     const { container } = render(<GifExpertApp />);
  //     expect(container).toMatchSnapshot();
  //   });

  //   test("Should add a new category when onNewCategory is called", () => {
  //     const { container } = render(<GifExpertApp />);

  //     const input = container.querySelector("input");
  //     const form = container.querySelector("form");

  //     fireEvent.change(input, { target: { value: category } });
  //     fireEvent.submit(form);

  //     expect(container.textContent).toContain(category);
  //   });

  //   test("does not add duplicate categories", () => {
  //     const { container } = render(<GifExpertApp />);

  //     const form = container.querySelector("form");
  //     fireEvent.submit(form);

  //     expect(container.textContent).not.toContain(category);
  //   });
  // });
});
