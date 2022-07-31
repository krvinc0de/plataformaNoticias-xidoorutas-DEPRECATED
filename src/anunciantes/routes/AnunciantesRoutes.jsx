import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { CrearAnuncio, Inicio, ListarAnuncios, InformacionCuentaPage, NotFoundPage } from '../pages'
import { AnuncioPage } from '../pages/AnuncioPage'

import '../styles/contenedorRouter.css'

export const AnunciantesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container contenedor p-0'>
          <Routes>
                  <Route path='/crear' element={ <CrearAnuncio /> }/>
                  <Route path='/todos' element={ <ListarAnuncios /> }/>
                  <Route path='/cuenta' element={ <InformacionCuentaPage /> }/>
                  <Route path='/inicio' element={ <Inicio /> }/>
                  <Route path='/' element={ <Inicio /> }/>
                  <Route path='/*' element={ <NotFoundPage /> }/>
                  <Route path='/publicacion/:id' element={ <AnuncioPage />}/>
          </Routes>
        </div>
    </>
  )
}
