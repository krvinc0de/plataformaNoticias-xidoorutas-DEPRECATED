import axios from 'axios'
import { useEffect, useState } from 'react'
import {url_consulta} from '../database/API_URL'

export const fechData = () => {
  //el estado debe inicializarse como lo que se va a recibir
  const [data, setData] = useState([])
  
  useEffect(() => {
    const traerData = async() => {
      const result = await axios.get(url_consulta)
      const data = result.data.noticias
      const filter = data.filter(post => post.dependencia === 'vialidad')
      setData(filter)
    }
    traerData()
  }, [])
  
  return{
    data
  }
}