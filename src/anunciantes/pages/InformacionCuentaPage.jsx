import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

import '../styles/informacionCuentaPageStyle.css'

export const InformacionCuentaPage = () => {

    const {usuario} = useContext(AuthContext)

  return (
    <>
      <div class="row container">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
            >
              Dependencia de la cuenta
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
            >
              Nombre de la cuenta
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-bs-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
            >
              Nombre de usuario
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-bs-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
            >
              Contrasenia
            </a>
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              Dependencia a la cual pertenece esta cuenta: <b>{usuario?.dependencia}</b>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              Nombre de la cuenta: <b>{usuario?.nombre}</b>
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              Nombre de usuario de la cuenta: <b>{usuario?.usuario}</b>
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              <b>Por motivos de seguridad no puedes ver la constrasenia de la cuenta, contacte con un administrador.</b>
            </div>
          </div>
        </div>
        <div className='mt-3 d-flex justify-content-start'>
          <button className='btn btn-primary'>
              <Link className='link' to='/inicio'>Regresar a inicio</Link>
          </button>
        </div>
      </div>
    </>
  );
}
