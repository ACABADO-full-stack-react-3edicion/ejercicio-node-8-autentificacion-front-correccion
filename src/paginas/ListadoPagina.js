import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contextos/AuthContext";

export const ListadoPagina = () => {
  const [items, setItems] = useState([]);
  const { token } = useContext(AuthContext);
  const cargarItems = useCallback(async () => {
    const resp = await fetch(process.env.REACT_APP_URL_API + "items/listado", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (resp.ok) {
      const itemsAPI = await resp.json();
      setItems(itemsAPI);
    }
  }, [token]);
  useEffect(() => {
    cargarItems();
  }, [cargarItems]);
  return (
    <main className="principal container">
      <div className="row">
        <h2 className="col-12">Listado</h2>
        <ul className="col-12 list-unstyled">
          {items.map((item) => (
            <li key={item._id}>{item.nombre}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};
