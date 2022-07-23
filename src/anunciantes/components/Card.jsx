import React from 'react'
import {Link} from 'react-router-dom'

import './card.css'

export const Card = ({_id, titulo, dependencia, fecha, parrafo1}) => {

  const link = `https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg`

  return (
    <>
      <div className="col-md-4">
        <div className='card text-center animate__animated animate__fadeIn'>
          <img className='sizeImg' src={link} alt={_id} />
          <div className='card-body'>
              <h4 className='card-title'>{titulo}</h4>
              <p className='card-text'>{dependencia}</p>
              <span className='text-secondary'>{fecha}</span>
              <p className='card-text'>{parrafo1.slice(0,50)}</p>
              <button className='btn btn-dark'>
              <Link className='link' to={`/publicacion/${_id}`}>Abrir</Link>
              </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  )
}
