import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";

import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en el LoginPage", () => {
  const user = {
    id: 1,
    name: "Fernando",
  };

  const setUserMock = jest.fn();

  test("should be the same that snapShot", () => {
    const { container } = render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 3));
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });

  test("debe de llamar el setUser cuando se hace click", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      email: "juan@google.com",
      id: 123,
      name: "Juan",
    });
  });
});
