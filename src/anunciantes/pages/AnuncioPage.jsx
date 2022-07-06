import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { url_consulta } from '../database/API_URL';

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
  const {_id, titulo, dependencia, cuerpo, fecha} = datos

  const navegation = useNavigate();

  const regresar = () => {
    navegation('/todos')
  }


  return (
    <div className="container row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src='...'
          alt={_id}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{titulo}</h3>
        <ul className="list-group list-group-flush animate__animated animate__slideInDown">
          <li className="list-group-item"><b>dependencia: </b>{dependencia}</li>
          <li className="list-group-item"><b>fecha: </b>{fecha}</li>
        </ul>
        <h5 className="mt-3">publicacion</h5>
        <p> {cuerpo} </p>
        <hr />
        <h5>Imagenes de la publicacion</h5>
        <div>
          <p>images</p>
        </div>
        <button
          className="btn btn-success animate__animated animate__slideInDown"
          onClick={regresar}
        >
          regresar
        </button>
      </div>
    </div>
  );
}
