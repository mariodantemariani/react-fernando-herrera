import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  console.log("useCheckAuth");
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //disparar un efecto para disparar si la persona esta autenticada o no.
  //si esta autenticada redirigir a al main o si no redirigir a Auth
  //usando firebase
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, displayName, email, photoURL } = user;

      dispatch(login({ uid, displayName, email, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, [status]);

  return status;
};
