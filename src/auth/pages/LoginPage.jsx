import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userNotFound } from '../alertas'
import { AuthContext } from '../context/AuthContext'
import { url_consulta } from '../database/API_URL'
import { useForm } from '../hooks/useForm'
import './styles/loginStyle.css'
import logo from '../assets/logoxr.png'

export const LoginPage = () => {

  const initialform = {
    user: '',
    password: ''
  }
  //usuarios de la db
  const [usuariosGet, setUsuariosGet] = useState([]);
  //usuario ingresado
  const [usuario, setusuario] = useState({});
  //datos y acciones del form
  const {onSubmit, cuandoCambia, formState} = useForm( initialform );

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

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
  dta();

  useEffect(() => {
    const capture = () => {
      setusuario(formState);
    }
    capture();
  }, [formState])
  

  const onLogin = (e) => {
    e.preventDefault();
    const {user, password} = usuario;
    const prueba = usuariosGet.filter(fil => fil.user === user && fil.password === password);
    if (prueba.length === 0) {
      userNotFound();
    }else{
      const [objeto] = prueba;
      const {dependencia, nombre} = objeto;
      if(prueba.length === 1){
        login(user, nombre, dependencia);
        navigate('/', {
          replace: true
        });
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="title-style">
                  <h1 className="titulo">XIDOO</h1>
                  <h1 className="titulo">RUTAS</h1>
                </div>
              </div>
              <div className="col centrador">
                <img src={logo} className="imagen" alt='Xidoo Rutas'/>
              </div>
            </div>
            <p className="hastag-style">#Conectando la ciudad</p>
            <p className="sub-style">
              Da a conocer tus negocios o manten informada a la comunidad con
              tus anuncios.
            </p>
          </div>
          <div className="col">
            <div className="card rounded-3">
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <div className="input mb-3">
                    <label className="form-label">
                      Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name='user'
                      placeholder="usuario" 
                      required
                      onChange={cuandoCambia}
                    />
                  </div>
                  <div className="input mb-3">
                    <label className="form-label">
                      contrasena
                    </label>
                    <input
                      type="password" 
                      className="form-control" 
                      name="password" 
                      placeholder="Contrasenia" 
                      required
                      onChange={cuandoCambia}
                    />
                  </div>
                  <hr />
                  <div className="d-grid gap-2">
                    <button 
                      type="submit" 
                      className="btn btn-warning"
                      onClick={onLogin}
                    >
                      Iniciar sesion
                    </button>
                  </div>
                </form>
                <div className="lost mb-3">
                  <label className="form-label"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
