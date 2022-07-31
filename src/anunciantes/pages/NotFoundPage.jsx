import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/notFoundStyle.css'

export const NotFoundPage = () => {
  return (
    <>
      <div className='container' id='cuerpo'>
        <div id="main">
          <div className="fof">
            <h1>Error 404</h1>
          </div>
        </div>
        <div>
          <div>
            <p className='text-center'>
              Al parecer estabas buscando algo que no se encuentra aqui pero no
              te preocupes, regresa al inicio con el boton de abajo :)
            </p>
          </div>
          <div className='d-flex justify-content-center'>
            <button 
              className='btn btn-secondary'
            >
              <Link className='link' to='/inicio'>Regresar a inicio</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
