import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { authReducer } from "./AuthReducer";
import { Types } from "../types/types";

// const initialState = {
//   logged: false,
//   name: "user",
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return { logged: !!user, user };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: 123, name };

    const action = {
      type: Types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: Types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};
