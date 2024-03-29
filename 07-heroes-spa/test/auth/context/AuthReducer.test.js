import { Types } from "../../../src/auth/types/types";
import { authReducer } from "../../../src/auth/context/AuthReducer";

describe("Test in AuthReducer", () => {
  test("should return the default state", () => {
    const data = { logged: false };
    const state = authReducer(data, {});
    expect(state).toEqual(data);
  });

  test("should return the default state-empty case", () => {
    const data = {};
    const state = authReducer(data, {});
    expect(state).toEqual(data);
  });

  test("should login", () => {
    const action = {
      type: Types.login,
      payload: {
        name: "Fernando",
        id: 123,
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should logout", () => {
    const state = {
      logged: true,
      user: { name: "Fernando", id: 123 },
    };

    const action = {
      type: Types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
