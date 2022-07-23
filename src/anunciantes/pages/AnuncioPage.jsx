import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { url_consulta } from '../database/API_URL';

import '../styles/anuncioPageStyle.css'

export const AnuncioPage = () => {
  const {id} = useParams();

  const [datos, setdatos] = useState([])

  const filtro = (id) => {
    useEffect(() => {
      const dts = async() => {
        const {data} = await axios.get(url_consulta)
        //console.log(data.noticias);
        const post = data.noticias
        //console.log(post);
        const nuevo = post.find( noti => noti._id === id)
        //console.log(nuevo);
        setdatos(nuevo)
      }
      dts()
    }, [])
    
  }
  filtro(id)
  const {_id, titulo, dependencia, parrafo1, parrafo2, parrafo3, fecha} = datos

  const navegation = useNavigate();

  const regresar = () => {
    navegation('/todos')
  }


  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src='...'
          alt={_id}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{titulo}</h3>
        <hr />
        <ul className="list-group list-group-flush animate__animated animate__slideInDown">
          <li className="list-group-item"><b>dependencia: </b>{dependencia}</li>
          <li className="list-group-item"><b>fecha: </b>{fecha}</li>
        </ul>
        <h5 className="mt-3">publicacion</h5>
        <hr />
        <div className='clavicula animate__animated animate__fadeIn'>
          <h6>Introduccion</h6>
          <p className='text-justify'> {parrafo1} </p>
          <h6>Desarrollo</h6>
          <p className='text-justify'> {parrafo2} </p>
          <h6>Desenlace</h6>
          <p className='text-justify'> {parrafo3} </p>
        </div>
        <hr />
        <div className='animate__animated animate__fadeIn'>
          <h5>Imagenes de la publicacion</h5>
          <div>
            <p>images</p>
          </div>
        </div>
        <div className='mb-5'>
        <button
          className="btn btn-success animate__animated animate__slideInDown"
          onClick={regresar}
        >
          regresar
        </button>
        </div>
      </div>
    </div>
  );
}
