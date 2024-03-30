import { Route, Routes, Navigate } from "react-router-dom";
import { JornalPage } from "../pages/JornalPage";

export const JornalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JornalPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
