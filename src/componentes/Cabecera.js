import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header className="cabecera">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <h1 className="col">Items</h1>
          <nav className="menu col">
            <ul className="list-inline text-right">
              <li className="list-inline-item">
                <NavLink to="/inicio" activeClassName="actual">
                  Inicio
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/listado" activeClassName="actual">
                  Listado
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/logout">Logout</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
