import {
  authSlice,
  onLogin,
  onChecking,
  onLogout,
  clearErrorMessage,
} from "../../../src/store/auth/authSlice";

import {
  initialState,
  authenticatedState,
  nonAuthenticatedState,
} from "../../__fixtures/authStates";
import { testUserCredentials } from "../../__fixtures/testUser";

describe("Prueba en AuthSlice", () => {
  test("Debe de regresar el estado por defecto", () => {
    const state = authSlice.getInitialState();
    //Opcion 1
    expect(state).toEqual(initialState);
  });

  test("Debe de realizar el login", () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    //console.log(state);

    expect(state).toEqual({
      status: "authenticated",
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test("Debe de realizar el logout", () => {
    const state = authSlice.reducer(authenticatedState, onLogout());

    console.log(state);
    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: undefined,
    });
  });

  test("Debe de realizar el logout-2", () => {
    //usamos el error messages
    const errorMessage = "Credenciales no son correctas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    console.log(state);
    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: errorMessage,
    });
  });

  test("Debe de realizar el checking", () => {
    const state = authSlice.reducer(initialState, onChecking());
    expect(state).toEqual({
      status: "checking",
      user: {},
      errorMessage: undefined,
    });
  });

  test("Debe de limpiar el mensaje de error", () => {
    const state = authSlice.reducer(authenticatedState, clearErrorMessage());
    expect(state).toEqual({
      status: "authenticated",
      user: authenticatedState.user,
      errorMessage: undefined,
    });
  });

  test("Debe de limpiar el mensaje de error-mejor formato", () => {
    const errorMessage = "Credenciales no son correctas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const newState = authSlice.reducer(authenticatedState, clearErrorMessage());
    //esto es lo importante
    expect(newState.errorMessage).toBe(undefined);
  });
});
