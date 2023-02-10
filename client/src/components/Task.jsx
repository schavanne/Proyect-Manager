import React from "react";
export const Task = () => {
  return (
    <div className="flex justify-between bg-white p-5 mb-5 shadow-md">
      <div>
        <p className="mb-1 text-xl">Nombre de la tarea</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">Descripción de la tarea</p>
        <p className="mb-1 text-xl">Fecha de entrega</p>
        <p className="mb-1 text-gray-600">Prioridad</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start gap-2">
        <button
        /* onClick={} */
        className="bg-indigo-600 p-2 text-white uppercase font-bold text-sm rounded-lg"
        >
          Editar
        </button>
        {false ? (
        <button className="bg-gray-600 p-2 text-white uppercase font-bold text-sm rounded-lg">Completa</button>
        ) : (
        <button className="bg-gray-600 p-2 text-white uppercase font-bold text-sm rounded-lg">Incompleta</button>
        )}
        <button
        /* onClick={} */
        className="bg-gray-600 p-2 text-white uppercase font-bold text-sm rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
