import React from 'react'

// aqui se usa la funcion memo de React, con la que recordamos el estado de un component,
// de esa forma solo es llamada o se dispara cuando el valor de las props cambia.
// no asi cuando este es llamado con el mimso valor  
// por ello si se llama con los mismos valores mostrar el componente memorizado.
export const TitleCounter = React.memo(({ value }) => {
    console.log(' Me estan llamando. ');
    return (
        <div className="alert alert-success" role="alert">
            <h4>{ value }</h4>
        </div>
    )
});
