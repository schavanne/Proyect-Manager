import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <div>
        <h2>Proyects Manager</h2>
        <input type="text" placeholder="Buscar proyecto..." />
        <div>
          <Link to="/proyects">Proyectos</Link>
          <button
            type="button"
            /* onClick={closeSession} */
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
