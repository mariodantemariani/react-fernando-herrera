import { UserContext } from "./UserContext";
import { useState } from "react";
import PropTypes from "prop-types";

// const user = {
//   name: "Fernando",
//   id: 123,
//   email: "f@f.com",
// };
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.array,
};
