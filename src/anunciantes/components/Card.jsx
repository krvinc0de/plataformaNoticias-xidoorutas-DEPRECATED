import React from 'react'
import {Link} from 'react-router-dom'

export const Card = ({_id, titulo, dependencia, fecha, parrafo1}) => {
  return (
    <>
        <div className="col" key={_id}>
            <div className="card">
            <img src='...' className="card-img-top" alt={_id} />
            <div className="card-body">
                <h5 className="card-title">{titulo.slice(0, 20)}...</h5>
                <hr />
                <p>
                  {parrafo1.slice(0, 50)}...
                </p>
                <hr />
                <small>Dependencia: <b>{dependencia}</b> </small>
                <p className="card-text">
                Publicado el dia: <b>{fecha}</b>
                </p>
            </div>
            <button className='btn btn-success'>
                <Link className='link' to={`/publicacion/${_id}`}>Ver publicacion completa</Link>
            </button>
            </div>
        </div>
    </>
  )
}
