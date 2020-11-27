import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    //const incrementar = ( num ) => {
    //    setValor( valor + num )
    //}

    // primero memorizo el valor de function
    // por parametro envio en valor del incrmento que se usa dentro hijo.js
    const incrementar = useCallback(( num ) => {
        // obtengo el valor del estado anterior y lo uso para asignar el nuevo valor
        setValor( stateVale =>  stateVale + num);
    }, [ setValor ]);

    return (
        <div className="container card">
            <div className="card-body">
                <h1>Padre</h1>
                <p> Total: { valor } </p>

                <hr />

                {
                    numeros.map( n => (
                        <Hijo 
                            key={ n }
                            numero={ n }
                            incrementar={ incrementar }
                        />
                    ))
                }
                {/* <Hijo /> */}
            </div>
        </div>
    )
}
