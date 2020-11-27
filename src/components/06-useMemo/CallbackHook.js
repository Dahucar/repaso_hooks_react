import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
/*
    El "useCallback" tiene 2 casos de uso.
    -> 1. pasar una funcion a aun componenete hijo.
*/
export const CallbackHook = () => {
    const [counter, setCounter] = useState( 10 );

    /* 
        1. esta será enviada al componente hijo.
        ->  dato: debido a que la cuando le pasamos una funcion como props al componente
                  esta siempre sera un nuevo valor, por ende se cargara de nuevo el componente.
    */
    //const increment = () => {
    //    setCounter( counter + 1 );
    //}

    /*
        Regresara una version memorizada. de esta forma react sabra 
        que si su valor cambió si la dependencia no ha cambiado. 
    */
    const increment = useCallback( ( num ) => { 
        //los argumentos que se envien desde la function hija
        //se deben enviar desde los parametros del propio
        // useCallback
        setCounter( incrementValue => incrementValue + num );
    }, [ setCounter ]);

    // en caso de usar un useEffect igual se debera usar la version
    // memorizada del la funcion, ya que este tipo de valor originalmente
    // genera una nueva renderizacion del componente. 
    

    return (
        <div className="container card">
            <div className="card-body">
                <h2>CallbackHook { counter } </h2>
            </div>
            <div className="card-footer">
                <ShowIncrement  increment={ increment } />
            </div>
        </div>
    )
}
