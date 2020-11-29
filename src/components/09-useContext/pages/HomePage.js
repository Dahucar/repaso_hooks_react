import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

export const HomePage = () => {
    // con este hook podremos obtener los datos compartidos en el context
    // será posible obtenerlo siempre y cuando este componente este dentro de la gerarquia
    // definida. 
    const { user } = useContext(UserContext);
    console.log( user );
    return (
        <div className="card">
            <h2>HomePage</h2>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </div>
    )
}
