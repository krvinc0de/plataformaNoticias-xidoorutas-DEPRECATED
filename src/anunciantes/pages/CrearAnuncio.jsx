import React, { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { format } from 'date-fns'
import { useForm } from '../hooks/useForm'
import '../styles/formStyle.css'
import { errorEmptyInput } from '../alertas/errorEmptyInput'
import { successPost } from '../alertas/successPost'

export const CrearAnuncio = () => {
  
  //trae los datos de la cuenta del usuario desde el contexto de la aplicacion
  const {usuario} = useContext(AuthContext)
  //extrae la dependencia desde los datos del contexto
  const dep = usuario.dependencia

  //obtiene la decha del dia de hot y la formatea con date-fns
  const today = new Date();
  const fechaFormato = format(today, 'dd/MM/yyyy')

  //objeto inicial que se envia al hook useForm
  const initState = {
    titulo: '',
    dependencia: dep,
    fecha: fechaFormato,
    cuerpo: '',
    parrafo1: '',
    parrafo2: '',
    parrafo3: ''
  }

  //llamda al hook useForm y extraigo funciones y datos
  const {cuandoCambia, onSubmit, titulo, dependencia, parrafo1, parrafo2, parrafo3} = useForm(initState)

  //datos para setear al estado del hook useForm
  const datos = {
    titulo: titulo,
    dependencia: dependencia,
    fecha: fechaFormato,
    parrafo1: parrafo1,
    parrafo2: parrafo2,
    parrafo3: parrafo3
  }
       

  const EnvioAndAlert = (e) => {
    e.preventDefault();
    if (
      datos.parrafo1 === '' || datos.parrafo1 != ''
      && datos.parrafo2 === '' || datos.parrafo2 != ''
      && datos.parrafo3 === '' || datos.parrafo3 != ''
      && datos.titulo === ''
      ) {
      errorEmptyInput()
    }else {
      successPost(datos, onSubmit)
    }
  }

  return (
    <>
      <div className='container mt-2'>
        <form onSubmit={EnvioAndAlert}>
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
              value={fechaFormato} 
              name='fecha' 
              onChange={cuandoCambia}
              disabled
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

            <button 
              className='btn btn-success mt-3 mb-5' 
              type='submit'
            >
              Publicar
            </button>
        </form>

      </div>
    </>
  )
}
