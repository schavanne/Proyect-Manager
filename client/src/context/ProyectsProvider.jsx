import React, { createContext, useState } from 'react'
import { clientAxios } from '../config/clientAxios';

const ProyectsContext = createContext()

const ProyectsProvider = ({children}) => {

const [alert, setAlert] = useState ([]);

const [loading, setLoading] = useState(true);

const [proyects, setProyects] = useState([]);

const showAlert = (msg, time = true) => {
    setAlert({
      msg
    });

    if(time){
      setTimeout(() => {
        setAlert({});
      }, 8000);
    }
  };

  const getProyects = async () => {
    setLoading(true);

    try{
        const token = sessionStorage.getItem('token');
        if(!token) return null

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }

        }

        const {data} = await clientAxios.get('/proyects', config)
        //console.log(data)
        setProyects(data.proyects)
    }catch (error){
        console.error;

        showAlert(error.response ? error.response.data.msg : 'Upps, hubo un error')
    }finally {
        setLoading(false)
    }

  }

    return (
        <ProyectsContext.Provider
            value={{
                loading,
                alert,
                showAlert,
                proyects,
                getProyects
            }}
        >
            {children}

        </ProyectsContext.Provider>
    )
}

export {
    ProyectsProvider
}

export default ProyectsContext