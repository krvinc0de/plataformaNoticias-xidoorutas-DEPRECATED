import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url_consulta } from '../database/API_URL'
import { useForm } from '../hooks/useForm'
import './styles/loginStyle.css'

export const LoginPage = () => {

  const initialform = {
    user: '',
    password: ''
  }

  const [usuariosGet, setUsuariosGet] = useState([]);
  const [usuario, setusuario] = useState({})
  const {onSubmit, cuandoCambia, formState} = useForm( initialform );
  //console.log(formState);
  //const [first, setfirst] = useState(second)

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
    e.preventDefault();
    console.log(usuario);
    console.log(usuariosGet);
    console.log(usuario);
    const {user, password} = usuario;
    console.log(user);
    const prueba = usuariosGet.filter(fil => fil.user === user && fil.password === password)
    console.log(prueba);
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
