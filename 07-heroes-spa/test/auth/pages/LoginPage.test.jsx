import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context";
import { LoginPage } from "./../../../src/auth/pages/LoginPage";

// Mock del contexto de autenticación
const mockAuthContext = {
  login: jest.fn(),
};

// Mock de la función useNavigate
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("LoginPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders login button", () => {
    render(<LoginPage />);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
  });

  // test("should render correctly", () => {
  //   render(
  //     <AuthContext.Provider value={mockAuthContext}>
  //       <MemoryRouter>
  //         <LoginPage />
  //       </MemoryRouter>
  //     </AuthContext.Provider>
  //   );
  //   expect(screen.getByText("Login")).tobeTruthy();
  //   //expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  // });

  // it("renders login page correctly", () => {
  //   render(
  //     <AuthContext.Provider value={mockAuthContext}>
  //       <LoginPage />
  //     </AuthContext.Provider>
  //   );

  //   expect(screen.getByText("Login")).toBeInTheDocument();
  //   expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  // });

  // it("calls login function and navigates on login button click", () => {
  //   const mockNavigate = jest.fn();
  //   const lastPath = "/dashboard";

  //   // Mock de la función useNavigate
  //   require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);

  //   render(
  //     <AuthContext.Provider value={mockAuthContext}>
  //       <LoginPage />
  //     </AuthContext.Provider>
  //   );

  //   fireEvent.click(screen.getByRole("button", { name: "Login" }));

  //   expect(mockAuthContext.login).toHaveBeenCalledWith("Mario Dante Julio");
  //   expect(mockNavigate).toHaveBeenCalledWith(lastPath, { replace: true });
  // });
});
