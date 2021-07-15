import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";

export const RutaProtegida = (props) => {
  const { children } = props;
  const { logueado } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (!logueado) {
      history.push("/login");
      return;
    }
  }, [logueado, history]);
  return children;
};
