import {
  uiSlice,
  onOpenDateModal,
  onCloseDateModal,
} from "../../../src/store/ui/uiSlice";

describe("Pruebas en uiSlice", () => {
  test("Debe de regresar el estado por defecto", () => {
    const state = uiSlice.getInitialState();
    //Opcion 1
    expect(state).toEqual({ isDateModalOpen: false });
    //Opcion 2
    expect(state.isDateModalOpen).toBeFalsy();
  });

  test("Debe de abrir y cerrar el modal", () => {
    let state = uiSlice.getInitialState();
    //paso 1
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();
    //paso 2
    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
