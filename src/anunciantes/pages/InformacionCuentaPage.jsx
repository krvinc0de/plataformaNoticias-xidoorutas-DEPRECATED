import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'

export const InformacionCuentaPage = () => {

    const {usuario} = useContext(AuthContext)

  return (
    <>
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
        <div>
            <button className='btn btn-success'>
                Regresar a inicio
            </button>
        </div>
    </div>
    </>
  )
}
