import React, { useContext } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom';
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
        Swal.fire({
          icon: 'success',
          title: 'La sesion se cerro',
          showConfirmButton: false,
          timer: 1500
        },
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
 
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
 
          <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className=''>
              <img src="https://salamanca.gob.mx/wp-content/uploads/2022/06/4F2C9D79-05E1-4454-A422-663758C54996-300x200.jpeg" alt="perfil" className='perfil mx-auto d-block'/>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div>
                  <table className='table table-dark'>
                      <tbody>
                        <tr>
                          <th>
                            <Link className='text-dark text-decoration-none' to="/inicio">
                              <button className='btn2 btn-warning'>
                                <i className='m-2'>icono</i>
                                Inicio
                              </button>
                            </Link>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <Link className='text-dark text-decoration-none' to='/todos'>
                              <button className='btn2 btn-warning'>
                                <i className='m-2'>Icono</i>
                                Publicaciones
                              </button>
                            </Link>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <Link className='text-dark text-decoration-none' to="/crear">
                              <button className='btn2 btn-warning'>
                                <i className='m-2'>Icono</i>
                                Crear Publicacion
                              </button>
                            </Link>
                          </th>
                        </tr>
                      </tbody>
                  </table>
                </div>
                <div className='helpers'>
                  <button 
                    className='btn2 btn-warning mb-2'
                  >
                      <Link className='text-dark text-decoration-none' to="/cuenta">
                        Informacion de la cuenta
                      </Link>
                  </button>
                  <button 
                    className='btn2 btn-warning'
                    onClick={cerrarsesion}
                  >
                      Cerrar Sesion
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
 
 
}