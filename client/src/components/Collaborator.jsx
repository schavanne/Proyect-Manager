import React from "react";
export const Collaborator = () => {
  return (
    <div className="bg-white border shadow-md rounded p-5 justify-between flex items-center">
      <p className="font-bold uppercase">
        Nombre de colaborador
        <span className="text-gray-600 lowercase">|Email</span>
      </p>
      <div>
        <button className='bg-red-600 p-2 text-white uppercase font-bold text-sm rounded-lg'
        onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
