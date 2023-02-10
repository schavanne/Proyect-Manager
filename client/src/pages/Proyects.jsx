import React, {useEffect} from "react";
import { ProyectPreview } from "../components/ProyectPreview";
import { useProyects } from "../hooks/useProyects";

export const Proyects = () => {

  const {loading, alert, proyects, getProyects} = useProyects();

  useEffect(() => {
    getProyects()
  }, []);

  return (
    <>
      <h1 className='text-4xl font-black'>Proyectos</h1>
      <div className='bg-white p-5 shadow mt-10 rounded-md'>
      {
        loading ?
        <p>Cargando...</p>
        :
        proyects.length
        ?
        proyects.map(proyect => <ProyectPreview key={proyect._id} {...proyect}/>)
        :
        <p>No hay proyectos agregados</p>

      }
      </div>
    </>
  );
};
