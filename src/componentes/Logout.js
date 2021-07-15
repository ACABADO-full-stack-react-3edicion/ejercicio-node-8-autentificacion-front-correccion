import { useContext, useEffect } from "react";
import { AuthContext } from "../contextos/AuthContext";

export const Logout = () => {
  const { desloguearUsuario } = useContext(AuthContext);
  useEffect(() => {
    desloguearUsuario();
  }, [desloguearUsuario]);
  return null;
};
