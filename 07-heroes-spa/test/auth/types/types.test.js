import { Types } from "../../../src/auth/types/types";

describe("Test in types", () => {
  test("Should return these types", () => {
    expect(Types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
