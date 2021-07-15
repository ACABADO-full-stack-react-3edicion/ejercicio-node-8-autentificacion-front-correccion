import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { Logout } from "./componentes/Logout";
import { RutaProtegida } from "./componentes/RutaProtegida";
import { AuthContextProvider } from "./contextos/AuthContextProvider";
import { InicioPagina } from "./paginas/InicioPagina";
import { ListadoPagina } from "./paginas/ListadoPagina";
import { LoginPagina } from "./paginas/LoginPagina";
import { NotFoundPagina } from "./paginas/NotFoundPagina";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Cabecera />
        <Switch>
          <Route path="/inicio" exact>
            <RutaProtegida>
              <InicioPagina />
            </RutaProtegida>
          </Route>
          <Route path="/listado" exact>
            <RutaProtegida>
              <ListadoPagina />
            </RutaProtegida>
          </Route>
          <Route path="/login" exact>
            <LoginPagina />
          </Route>
          <Route path="/logout" exact>
            <RutaProtegida>
              <Logout />
            </RutaProtegida>
          </Route>
          <Route path="/" exact>
            <Redirect to="/inicio" />
          </Route>
          <Route path="**">
            <NotFoundPagina />
          </Route>
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
