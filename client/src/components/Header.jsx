import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="px-4 py-5 bg-white border-b">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 className="text-4xl text-sky-600 font-black md:w-1/4">Proyects Manager</h2>
        <input type="text" placeholder="Buscar proyecto..." className="rounded-lg w:3/3 md:w-1/3 lg:w-1/3 p-2 border" />
        <div className="flex justify-between items-center gap-4">
          <Link to='/proyects'>Proyectos</Link>
          <button
            type="button"
            /* onClick={closeSession} */
            className="text-white text-sm bg-sky-600 p-2 rounded uppercase font-bold"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
