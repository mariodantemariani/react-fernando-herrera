import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context";
import { PublicRoute } from "../../../src/heroes/routes";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Test on <PublicRoute/>", () => {
  test("If user is not logged, show childen", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "Ruta Publica"
    );
  });

  test("If user is logged, show to navigate to childen", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Fernando",
        id: 123,
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <h1>Ruta Publica</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Heroe Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).not.toContain(
      "Ruta Publica"
    );

    expect(screen.getByText("Heroe Marvel")).toBeTruthy();
  });
});
