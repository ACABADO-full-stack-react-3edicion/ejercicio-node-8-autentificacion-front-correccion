import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";

export const LoginPagina = () => {
  const history = useHistory();
  const { loguearUsuario } = useContext(AuthContext);
  const [datosLogin, setDatosLogin] = useState({
    usuario: "",
    contrasenya: "",
  });
  const [error, setError] = useState(false);
  const setDatos = (e) => {
    setDatosLogin({
      ...datosLogin,
      [e.target.id]: e.target.value,
    });
  };
  const enviarFormulario = async (e) => {
    e.preventDefault();
    const resp = await fetch(process.env.REACT_APP_URL_API + "usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosLogin),
    });
    if (!resp.ok) {
      setError(true);
      return;
    }
    setError(false);
    const { token } = await resp.json();
    localStorage.setItem("token", token);
    loguearUsuario();
    history.push("/inicio");
  };
  return (
    <>
      <main className="principal container">
        <div className="row">
          <h2 className="col-4 offset-4">Login</h2>
          <form className="col-4 offset-4" onSubmit={enviarFormulario}>
            <div className="form-group">
              <label htmlFor="usuario">Nombre de usuario: </label>
              <input
                type="text"
                id="usuario"
                value={datosLogin.usuario}
                className="form-control"
                onChange={setDatos}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contrasenya">Contraseña: </label>
              <input
                type="password"
                id="contrasenya"
                value={datosLogin.contrasenya}
                className="form-control"
                onChange={setDatos}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">
                Acceder
              </button>
            </div>
            {error && <p className="error">Datos incorrectos</p>}
          </form>
        </div>
      </main>
    </>
  );
};
