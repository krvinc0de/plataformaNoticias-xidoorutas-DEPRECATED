import { useState } from 'react';
import { enviarDatos } from '../helpers/agregarRegistro';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const cuandoCambia = (evento) => {
        const { name, value } = evento.target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onSubmit = (datos) => {
        enviarDatos(datos)
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        cuandoCambia,
        onSubmit,
    }
}