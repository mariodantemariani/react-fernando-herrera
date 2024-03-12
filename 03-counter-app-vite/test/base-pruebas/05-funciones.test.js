import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("should first", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser(testUser);

    expect(testUser).toEqual(user);
  });

  test("getUsuario deberia esperar Mario", () => {
    const name = "Mario";

    const testUser = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual(testUser);
  });
});
