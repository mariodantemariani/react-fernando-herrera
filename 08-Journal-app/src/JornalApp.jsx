import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

export const JornalApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
