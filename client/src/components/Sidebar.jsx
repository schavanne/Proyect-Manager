import React from "react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <aside className='md:w-80 px-5 py-10'>
      <p className='text-xl font-bold'>Hola:</p>
      <Link to="create-proyect" className='bg-sky-600 w-full p-3 text-white uppercase font-bold rounded-md block mt-5 text-center'>Nuevo proyecto</Link>
    </aside>
  );
};
