import React, { useEffect, useState } from 'react'

export const EffectMensaje = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x: ejeX, y: ejeY } = coords;

    useEffect(() => {
        // toda la logica del efecto
        console.log('wena wena los kbros.');

        const myMouseMove = ( event ) => {
            const coords = { x: event.x, y: event.y }
            setCoords( coords );
        }

        window.addEventListener('mousemove', myMouseMove);

        return () => {
            // toda la logica al eliminar el componente
            window.removeEventListener('mousemove', myMouseMove);
        }
    }, [ /* condición de actualizacion */ ])

    return (
        <div className="alert alert-primary" role="alert">
            que paa larva!. x: { ejeX } - y: { ejeY }
        </div>
    )
}
