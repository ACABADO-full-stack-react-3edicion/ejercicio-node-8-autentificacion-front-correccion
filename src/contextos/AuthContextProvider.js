import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = (props) => {
  const token = localStorage.getItem("token");
  const [logueado, setLogueado] = useState(!!token);
  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, history]);
  const { children } = props;
  const loguearUsuario = () => {
    setLogueado(true);
  };
  const desloguearUsuario = useCallback(() => {
    localStorage.removeItem("token");
    setLogueado(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ logueado, token, loguearUsuario, desloguearUsuario }}
    >
      {children}
    </AuthContext.Provider>
  );
};
