import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en First App", () => {
  test("should be the same that snapShot", () => {
    const title = "Test title";

    const { container } = render(<FirstApp title={title} />);

    //asserts
    expect(container).toMatchSnapshot();
  });

  test("should shown the title in the h1-using contain", () => {
    const title = "Test title";
    const { container, getByText } = render(<FirstApp title={title} />);
    //asserts
    expect(getByText(title)).toBeTruthy();
  });

  test("should shown the title in the h1-using querySelector", () => {
    const title = "Test title";
    const { container } = render(<FirstApp title={title} />);
    //asserts
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });

  test("should shown the title in the h1-using getByTestId", () => {
    const title = "Test title";
    const { container, getByTestId } = render(<FirstApp title={title} />);
    //asserts
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should shown the subtitle sent by props", () => {
    const title = "Test title";
    const subTitle = "No hay subtítulo";
    const { getByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    //asserts
    expect(getByText(subTitle).innerHTML).toBeTruthy();
  });
});
