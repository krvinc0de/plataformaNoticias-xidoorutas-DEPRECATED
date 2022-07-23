import React, { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext';
import { Card } from '../components/Card';
import { fechData } from '../helpers/consultarRegistro';
import '../styles/linkStyle.css'

export const ListarAnuncios = () => {

  const {usuario} = useContext(AuthContext)

  const {data} = fechData();

  return (
    <>
      <h1>
          Publicaciones de: <small>{usuario?.usuario}</small>
      </h1>
      <hr />
      <div className="mb-1 justify-content-center">
        <div className="row">
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