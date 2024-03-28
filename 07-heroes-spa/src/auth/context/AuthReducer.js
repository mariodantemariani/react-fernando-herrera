import { Types } from "../types/types";

// const initialState = {
//   logged: false,
//   name: "Mario",
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case Types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
