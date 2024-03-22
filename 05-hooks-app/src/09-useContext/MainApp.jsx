import { Navigate, Route, Routes } from "react-router-dom";

import { AboutPage, LoginPage, HomePage } from ".";

import { NavBar } from "../09-useContext/NavBar";
import { UserProvider } from "../09-useContext/context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>Main APP</h1> */}
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
