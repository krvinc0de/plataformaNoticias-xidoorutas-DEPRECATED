import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { enviarDatos } from '../helpers/agregarRegistro'
import { useForm } from '../hooks/useForm'
import '../styles/formStyle.css'

export const CrearAnuncio = () => {
  
  const {usuario} = useContext(AuthContext)

  const dep = usuario.dependencia

  const initState = {
    titulo: '',
    dependencia: dep,
    fecha: '',
    cuerpo: '',
    parrafo1: '',
    parrafo2: '',
    parrafo3: ''
  }

  const {cuandoCambia, onSubmit, titulo, dependencia, fecha, parrafo1, parrafo2, parrafo3} = useForm(initState)

  const datos = {
    titulo: titulo,
    dependencia: dependencia,
    fecha: fecha,
    parrafo1: parrafo1,
    parrafo2: parrafo2,
    parrafo3: parrafo3
  }
       
  //enviarDatos(datos)

  return (
    <>
      <div className='container mt-2'>
        <form onSubmit={()=>onSubmit(datos)}>
            <label className='form-label'>Titulo de la publicacion</label>
            <input 
              type="text" 
              className='form-control' 
              value={titulo} 
              name='titulo' 
              onChange={cuandoCambia}
              minLength='10'
              maxLength='30'
            />

            <label className='form-label mt-2'>Dependencia</label>
            <input 
              type="text" 
              className='form-control' 
              value={dependencia} 
              name='dependencia' 
              disabled
            />

            <label className='label-form mt-2'>Fecha</label>
            <input 
              type="text" 
              className='form-control' 
              value={fecha} name='fecha' 
              onChange={cuandoCambia}
              minLength='10'
              maxLength='30'
            />

            <label className='label-form mt-2'>Introduccion de la publicacion</label>
            <textarea 
              className="form-control" 
              rows="3" 
              value={parrafo1} 
              name='parrafo1' 
              onChange={cuandoCambia}
              minLength='100'
              maxLength='1000'
              >
            </textarea>

            <label className='label-form mt-2'>Desarrollo de la publicacion</label>
            <textarea 
              className="form-control" 
              rows="3" value={parrafo2} 
              name='parrafo2' 
              onChange={cuandoCambia}
              minLength='100'
              maxLength='1000'
            >
            </textarea>

            <label className='label-form mt-2'>Conclusion de la publicacion</label>
            <textarea 
              className="form-control" 
              rows="3" value={parrafo3} 
              name='parrafo3' 
              onChange={cuandoCambia}
              minLength='100'
              maxLength='1000'
            >
            </textarea>

            <label className='form-label mt-2'>Imagen de titulo</label>
            <input 
              type="file" 
              accept=".png, .jpg, .jpeg" 
              className='form-control'
            />

            <label className='label-form mt-2'>Imagenes de la publicacion</label>
            <input 
              type="file" 
              accept=".png, .jpg, .jpeg" 
              multiple 
              className='form-control'
            />

            <hr />

            <button className='btn btn-success mt-3 mb-5' type='submit'>Publicar</button>
        </form>

      </div>
    </>
  )
}
