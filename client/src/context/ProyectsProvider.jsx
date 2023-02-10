import React, { createContext, useState } from 'react'
import { clientAxios } from '../config/clientAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

const ProyectsContext = createContext()

const ProyectsProvider = ({children}) => {

const navigate = useNavigate()

const [alert, setAlert] = useState ([]);

const [loading, setLoading] = useState(true);

const [proyects, setProyects] = useState([]);

const [proyect, setProyect] = useState({});

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
        showAlert(error.response ? error.response.data.msg : 'Upps, hubo un error',false)
    }finally {
        setLoading(false)
    }

  }

  const getProyect = async (id) => {
    setLoading(true);

    try {
        const token = sessionStorage.getItem('token');
        if(!token) return null

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }

        }

        const {data} = await clientAxios.get(`/proyects/${id}`, config);
        setProyect(data.proyect)

    }catch (error){
        console.error;
        showAlert(error.response ? error.response.data.msg : 'Upps, hubo un error',false)
    }finally {
        setLoading(false)
    }
  }

  const storeProyect = async (proyect) => {
    try {
        const token = sessionStorage.getItem('token');
        if(!token) return null

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }

        }

        const {data} = await clientAxios.post(`/proyects/`,proyect, config);
        setProyects([...proyects, data.proyect]);

        Toast.fire({
            icon : 'sucess',
            title : data.msg

        });

        navigate('proyect')

    }catch (error){
        console.error;
        showAlert(error.response ? error.response.data.msg : 'Upps, hubo un error',false)
    }
  }

    return (
        <ProyectsContext.Provider
            value={{
                loading,
                alert,
                showAlert,
                proyects,
                getProyects,
                proyect,
                getProyect,
                storeProyect
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