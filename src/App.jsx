/*
  Archivo en donde se llama todo lo de la app antes de llegar al main
*/

import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"
import 'animate.css/animate.min.css'

function App() {
  return(
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
