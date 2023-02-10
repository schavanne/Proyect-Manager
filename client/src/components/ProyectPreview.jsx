import React from "react";
import { Link } from "react-router-dom";

export const ProyectPreview = ({name, _id, client}) => {
  return (
    <div className='border-b p-3 flex justify-between'>
      <p>
        {name}
        <span className='text-sm text-gray-500 uppercase'>{` | ${client}`}</span>
      </p>
      <Link className="uppercase text-sm text-gray-400 hover:text-gray-800 font-bold" to={`/proyects/${_id}`}>Ver proyecto</Link>
    </div>
  );
};
