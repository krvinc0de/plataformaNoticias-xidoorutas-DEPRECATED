import React from 'react'
import { Card } from '../components/Card';
import { fechData } from '../helpers/consultarRegistro';
import '../styles/linkStyle.css'

export const ListarAnuncios = () => {

  const {data} = fechData();
  console.log(data);

  return (
    <>
      <div className="container mt-3 mb-3">
        <h1>
          Publicaciones de: <small>USUARIO</small>
        </h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>ordenar por:</h4>
            </div>
            <div className="col">
              <button className='btn btn-success'>Mas reciente</button>
            </div>
            <div className="col">
              <button className='btn btn-success'>Mas antiguo</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row rows-cols-1 row-cols-md-3 g-3">
          {data.length === 0 ? (<h1>No hay publicaciones o esta fallando el servidor</h1>) : 
            (data.map((props, i) => <Card key={i} {...props} />))
          }
        </div>
      </div>
    </>
  );
}
        //  {resp1 === true ? (dataReverb.map((props) => <Card key={props._id} {...props} />)) 
        //  : (resp2 === true && data.map((props) => <Card key={props._id} {...props} />))
        //  }
//dataReverb.map((props) => <Card key={props._id} {...props} />)