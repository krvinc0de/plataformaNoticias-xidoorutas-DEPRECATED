import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const cuandoCambia = (evento) => {
        const { name, value } = evento.target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onSubmit = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        cuandoCambia,
        onSubmit,
    }
}