import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AnunciantesRoutes } from '../anunciantes/routes/AnunciantesRoutes'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={ <LoginPage /> }/>
            <Route path='/*' element={ <AnunciantesRoutes /> }/>
        </Routes>
    </>
  )
}
