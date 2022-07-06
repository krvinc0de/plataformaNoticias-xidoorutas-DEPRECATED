import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import '../styles/styleNavbar.css'

export const Navbar = () => {
  
  const navigate = useNavigate();

  const cerrarsesion = ()=> {
    //falta el metodo logout
    navigate(
      '/login', {
        replace: true
      }
    )
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand">Xidoo Rutas</span>
          <NavLink className="navbar-toggler" to="/inicio">Inicio</NavLink>
          <NavLink className="navbar-toggler" to="/todos">Publicaciones</NavLink>
          <NavLink className="navbar-toggler" to="/crear">Crear publicacion</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Haz iniciado sesion como: <small>usuario</small> </h5>
              <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div>
              <img src="https://salamanca.gob.mx/wp-content/uploads/2022/06/4F2C9D79-05E1-4454-A422-663758C54996-300x200.jpeg" alt="perfil" className='perfil mx-auto d-block'/>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <button 
                  className='btn btn-success'
                  onClick={cerrarsesion}
                >
                    Cerrar Sesion
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
