import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import {url_consulta} from '../database/API_URL'

export const fechData = () => {

  const {usuario} = useContext(AuthContext)
  const {dependencia} = usuario

  //el estado debe inicializarse como lo que se va a recibir
  const [data, setData] = useState([])
  
  useEffect(() => {
    const traerData = async() => {
      const result = await axios.get(url_consulta)
      const data = result.data.noticias
      const filter = data.filter(post => post.dependencia === dependencia)
      setData(filter)
    }
    traerData()
  }, [])
  
  return{
    data
  }
}