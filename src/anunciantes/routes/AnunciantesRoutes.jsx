import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { CrearAnuncio, Inicio, ListarAnuncios } from '../pages'
import { AnuncioPage } from '../pages/AnuncioPage'

export const AnunciantesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container pt-5'>
            <Routes>
                <Route path='/crear' element={ <CrearAnuncio /> }/>
                <Route path='/todos' element={ <ListarAnuncios /> }/>
                <Route path='/inicio' element={ <Inicio /> }/>
                <Route path='/' element={ <Inicio /> }/>
                <Route path='/*' element={ <Inicio /> }/>
                <Route path='/publicacion/:id' element={ <AnuncioPage />}/>
            </Routes>
        </div>
    </>
  )
}
