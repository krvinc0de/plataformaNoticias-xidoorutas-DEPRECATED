import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { url_consulta } from '../database/API_URL'
import { useForm } from '../hooks/useForm'
import './styles/loginStyle.css'

export const LoginPage = () => {

  const initialform = {
    user: '',
    password: ''
  }
  //usuarios de la db
  const [usuariosGet, setUsuariosGet] = useState([]);
  //usuario ingresado
  const [usuario, setusuario] = useState({})
  //datos y acciones del form
  const {onSubmit, cuandoCambia, formState} = useForm( initialform );

  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const dta = () => {
    //esta funcion hace fetch a los usuarios y los guarda en un estado
    useEffect(() => {
      const usr = async() => {
        const people = await axios.get(url_consulta);
        const usuarios = people.data.usuarios;
        setUsuariosGet(usuarios);
      }
      usr()
    }, [])
  }
  dta()

  useEffect(() => {
    const capture = () => {
      setusuario(formState);
    }
    capture()
  }, [formState])
  

  const onLogin = (e) => { 
    const {user, password} = usuario;
    const prueba = usuariosGet.filter(fil => fil.user === user && fil.password === password)
    const [objeto] = prueba
    const {dependencia, nombre} = objeto
    if(prueba.length === 1){
      login(user, nombre, dependencia)
      navigate('/', {
        replace: true
      })
    }else{
      console.log('no existe el usuario');
    }
  }

  return (
    <>
      <div className='container'>
          <div className="wrapper">
          <form className="form-signin" onSubmit={onSubmit}>       
            <h2 className="form-signin-heading">Xidoo Rutas Anuncios</h2>
            <input 
              type="text" 
              className="form-control" 
              name="user" 
              placeholder="Usuario" 
              required 
              onChange={cuandoCambia}
            />
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Contrasenia" 
              required
              onChange={cuandoCambia}
            />      
            <button 
              className="btn btn-lg btn-primary btn-block" 
              type="submit"
              onClick={onLogin}
            >
              Iniciar sesion
            </button>   
          </form>
        </div>
      </div>
    </>

  )
}
