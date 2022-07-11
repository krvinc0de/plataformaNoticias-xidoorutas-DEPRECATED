import {Routes, Route} from 'react-router-dom'
import { AnunciantesRoutes } from '../anunciantes/routes/AnunciantesRoutes'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='/login' element=
              {
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route path='/*' element=
              {
                <PrivateRoute>
                  <AnunciantesRoutes />
                </PrivateRoute>
              }
            />

        </Routes>
    </>
  )
}
