import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";
describe("Pruebas en Counter App", () => {
  const defaultCounter = 20;

  test("should be the same that snapShot", () => {
    const { container } = render(<CounterApp value={defaultCounter} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 <CounterApp value={100}>", () => {
    render(<CounterApp value={defaultCounter} />);
    expect(screen.getByText(defaultCounter)).toBeTruthy();
    // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={defaultCounter} />);
    const incremented = defaultCounter + 1;
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(incremented.toString())).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={defaultCounter} />);
    const decremented = defaultCounter - 1;
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(decremented.toString())).toBeTruthy();
  });

  test("debe de funcionar el botón de reset", () => {
    render(<CounterApp value={defaultCounter} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(defaultCounter)).toBeTruthy();
  });
});
