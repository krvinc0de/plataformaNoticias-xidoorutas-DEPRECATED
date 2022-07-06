import axios from 'axios'
import React from 'react'
import './styles/loginStyle.css'

export const LoginPage = () => {


  const alEnviar = (evento) => {
    evento.preventDefault();
  }

  return (
    <>
      <div className='container'>
          <div className="wrapper">
          <form className="form-signin">       
            <h2 className="form-signin-heading">Xidoo Rutas Anuncios</h2>
            <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
            <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={alEnviar}>Iniciar sesion</button>   
          </form>
        </div>
      </div>
    </>

  )
}
