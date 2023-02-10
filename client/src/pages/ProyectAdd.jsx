import React from "react";
import { FormProyect } from "../components/FormProyect";
export const ProyectAdd = () => {
  return (
    <>
      <h1 className='text-4xl font-black'>Crear proyecto</h1>
      <div className='mt-10 flex justify-center'>
        <FormProyect />
      </div>
    </>
  );
};
