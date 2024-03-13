import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const title = "test";
  const url = "http://localhost/test"; //no sé que me añade http://localhost/ y no a Fernando
  const id = "test";

  test("Should match with snapshoot", () => {
    const { container } = render(<GifItem title={title} url={url} id={id} />);

    //asserts
    expect(container).toMatchSnapshot();
  });

  test("should show the image and ALT correctly", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title", () => {
    render(<GifItem title={title} url={url} id={id} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
