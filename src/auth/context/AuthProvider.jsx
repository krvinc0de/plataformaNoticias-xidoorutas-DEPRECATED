import { useReducer } from "react"
import { types } from "../types/types";
import { authReducer } from "./authReducer"
import {AuthContext} from './AuthContext'


const init =() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
  
    return {
      logged: !!usuario,
      usuario: usuario
    }
  }


export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (user = '', nombre = '', dependencia = '') =>{
      console.log(user);
        const usuario = {
          id:1, 
          usuario: user,
          nombre: nombre,
          dependencia: dependencia
        }

        const action = {
            type: types.login,
            payload: usuario
        }
        localStorage.setItem('usuario', JSON.stringify(usuario));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('usuario');
        const action = {
            action: types.logout
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login,
        logout: logout
      }}>
          {children}
    </AuthContext.Provider>
  )
}
