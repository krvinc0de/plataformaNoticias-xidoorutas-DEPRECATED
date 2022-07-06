import axios from 'axios'
import { url_agregar } from '../database/API_URL'

export const enviarDatos = (datos) => {

    const enviar = {
      ...datos
    }

    axios.post(url_agregar, enviar)
      .then(function(response){
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }