import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks/useCheckAuth";
// import { onAuthStateChanged } from "firebase/auth";
// import { FirebaseAuth } from "../firebase/config";
// import { logout, login } from "../store/auth";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  // const { status } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // //disparar un efecto para disparar si la persona esta autenticada o no.
  // //si esta autenticada redirigir a al main o si no redirigir a Auth
  // //usando firebase
  // useEffect(() => {
  //   onAuthStateChanged(FirebaseAuth, async (user) => {
  //     console.log("@@@", { user });

  //     if (!user) return dispatch(logout());

  //     const { uid, displayName, email, photoURL } = user;

  //     dispatch(login({ uid, displayName, email, photoURL }));
  //   });
  // }, [status]);

  console.log({ status });

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* Si no estoy autenticado, navega al login */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
      <Route /> */}
    </Routes>
  );
};
