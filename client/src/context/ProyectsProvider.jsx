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

        const {data} = await clientAxios.get('/proyects', config);
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
  /*const addCollaborator = async (proyect) => {
    const token = sessionStorage.getItem('token');
        if(!token) return null

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }

        }
        const {result} = await clientAxios.get('/proyects/collaborator/add/'+_id,{collaborator},config);
        const {data} = await clientAxios.delete(`/proyects/${id}`, config);

        const proyectsFiltered = proyects.filter(proyect => proyect._id !== id);
        setProyect(proyectsFiltered);

        Toast.fire({
            icon : 'success',
            title : data.msg

        });

        navigate('proyects')
  }*/
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

        if(proyect.id){
            const {data} = await clientAxios.put(`/proyects/${proyect.id}`,proyect, config);
            //console.log(data)
            //return null

            const proyectsUpdated = proyects.map(proyectState => {
                if(proyectState._id === data.proyect._id){
                return data.proyect
                }
                return proyectState
            });

            setProyects(proyectsUpdated);

            Toast.fire({
                icon : 'success',
                title : data.msg
    
            });

        }else{
            const {data} = await clientAxios.post(`/proyects/`,proyect, config);
            setProyects([...proyects, data.proyect]);

            Toast.fire({
                icon : 'success',
                title : data.msg
    
            });
        }

        navigate('proyects')

    }catch (error){
        console.error;
        showAlert(error.response ? error.response.data.msg : 'Upps, hubo un error',false)
    }
  }
  const deleteProyect = async (id) => {
    try {
        const token = sessionStorage.getItem('token');
        if(!token) return null

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }

        }
        const {data} = await clientAxios.delete(`/proyects/${id}`, config);

        const proyectsFiltered = proyects.filter(proyect => proyect._id !== id);
        setProyect(proyectsFiltered);

        Toast.fire({
            icon : 'success',
            title : data.msg

        });

        navigate('proyects')

    }catch (error) {
        console.error;
        showAlert(error.response ? error.response.data.msg : 'Upps, hubo un error',false)
    }
  }
  const deleteCollaborator = async (id,idCollab) => {
    try {
        const token = sessionStorage.getItem('token');
        if(!token) return null

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }

        }
        const {data} = await clientAxios.delete(`/collaborator/remove/${id}/${idCollab}`, config);

        const proyectsFiltered = proyects.filter(proyect => proyect._id !== id);
        setProyect(proyectsFiltered);

        Toast.fire({
            icon : 'success',
            title : data.msg

        });

        navigate('proyects')

    }catch (error) {
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
                storeProyect,
                deleteProyect,
                deleteCollaborator
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