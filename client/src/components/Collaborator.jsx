import React from "react";
import { useParams } from "react-router-dom";
import { useProyects } from "../hooks/useProyects";

export const Collaborator = (key) => {
  const {deleteCollaborator} = useProyects();
  const {id} = useParams()


  const handleDelete = () => {
    let idCollab = key;
    Swal.fire({
      title: '¿Estás seguro de eliminar el colaborador?',
      showCancelButton: true,
      confirmButtonColor : 'red',
      confirmButtonText: 'Confirmar',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCollaborator(id,idCollab)
      } 
    })
  }
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
