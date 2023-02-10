import React from "react";
import { Link } from "react-router-dom";
export const ProyectPreview = () => {
  return (
    <div className='border-b p-3 flex justify-between'>
      <p className='text-xl font-bold'>
        Nombre del proyecto
        <span className='text-sm text-gray-500 uppercase'>{"| Cliente"}</span>
      </p>
      <Link className="uppercase text-sm text-gray-400 hover:text-gray-800 font-bold" to={'/proyects/1'}>Ver proyecto</Link>
    </div>
  );
};
