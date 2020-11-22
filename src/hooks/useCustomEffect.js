import { useEffect, useState } from "react"

// https://www.breakingbadapi.com/api/episodes/60
export const useCustomEffect = ( url ) => {
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        // logica a ejecutar
        setState({ data: null, loading: true, error: null });
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    }, [ url ]);

    return state;
}
