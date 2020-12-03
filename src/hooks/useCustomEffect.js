import { useEffect, useRef, useState } from "react"

// https://www.breakingbadapi.com/api/episodes/60
export const useCustomEffect = ( url ) => {

    // el useRef mantendra el valor que asignado
    const isActive = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null })

    //efecto para determinar cuando este componente deja de estar activo
    useEffect(() => {
        return () => {
            isActive.current = false;
        }
    }, [  ])

    useEffect(() => {
        // logica a ejecutar
        setState({ data: null, loading: true, error: null });
        // cambios para probar hook useRef
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            if(isActive.current){
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }else{
                console.log('Componente inactivo -> error prevenido');
            }
        })
        .catch( () => {
            setState({
                data: null,
                loading: false,
                error: 'Error en la petición.',
            });
        });
    }, [ url ]);

    return state;
}
