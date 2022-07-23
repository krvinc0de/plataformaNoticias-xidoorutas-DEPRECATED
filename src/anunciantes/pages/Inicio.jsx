import React, { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import '../styles/inicioStyle.css'

export const Inicio = () => {

  const {usuario} = useContext(AuthContext)

  return (
    <>
      <header className='text-center text-black'>
        <div className='container'>
          <img className='border img-fluid mx-auto mb-4' src="https://salamanca.gob.mx/wp-content/uploads/2021/10/logo-salamanca-21-24.png" alt="..." />
          <h1>{usuario?.nombre}</h1>
          <hr className='star-light'/>
          <h2 className='font-weight-light mb-1'>Bienvenido</h2>
          <span>
            <p className="lh-1">
            This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
            </p>
          </span>
        </div>
      </header>
    </>
  )
}
