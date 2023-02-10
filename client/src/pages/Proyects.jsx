import React from "react";
import { ProyectPreview } from "../components/ProyectPreview";
export const Proyects = () => {
  const proyects = [1,2]
  return (
    <>
      <h1 className='text-4xl font-black'>Proyectos</h1>
      <div className='bg-white p-5 shadow mt-10 rounded-md'>
      {
        projects.length
        ?
        projects.map(project => <ProyectPreview key={project}/>)
        :
        <p>No hay proyectos agregados</p>

      }
      </div>
    </>
  );
};
