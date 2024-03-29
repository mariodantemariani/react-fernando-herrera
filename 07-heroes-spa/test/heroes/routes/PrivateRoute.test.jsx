import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context";
import { PrivateRoute } from "../../../src/heroes/routes";
import { MemoryRouter } from "react-router-dom";

describe("test on <PrivateRoute/>", () => {
  test("debe de mostrar el children si está autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Juan Carlos",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
