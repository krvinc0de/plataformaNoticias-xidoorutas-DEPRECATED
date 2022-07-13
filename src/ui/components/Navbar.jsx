import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../auth/context/AuthContext';

import '../styles/styleNavbar.css'

export const Navbar = () => {
  
  const {usuario, logout} = useContext(AuthContext)
  const navigate = useNavigate();

  const cerrarsesion = ()=> {
    Swal.fire({
      title: 'Desea cerrar sesion?',
      text: `Se esta cerrara la sesion de ${usuario?.usuario}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cierra mi sesion',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Nos vemos pronto!',
          'La sesion fue cerrada con exito',
          'success',
          logout(),
          navigate(
            '/login', {
              replace: true
            }
          )
        )
      }
    })
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
          <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div>
              <img src="https://salamanca.gob.mx/wp-content/uploads/2022/06/4F2C9D79-05E1-4454-A422-663758C54996-300x200.jpeg" alt="perfil" className='perfil mx-auto d-block'/>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className='container'>
                  <table className='table table-dark table-bordered'>
                    <thead>
                      <tr className='table-active'>
                        <th scope='col'>Datos de la cuenta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Usuario: {usuario?.usuario}</th>
                      </tr>
                      <tr className='table-active'>
                        <th scope='row'>nombre: {usuario?.nombre}</th>
                      </tr>
                      <tr>
                        <th scope='row'>dependencia: {usuario?.dependencia}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
