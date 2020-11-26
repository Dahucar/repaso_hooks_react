import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/funtions';
import { useCustomCounter } from '../01-useState/useCustomCounter'
import { TitleCounter } from './TitleCounter';

export const MemoHook = () => {
    const { state: counter, increment } = useCustomCounter(50);
    const [show, setShow] = useState(true);

    // useMemo: recordara un resultado o valor 
    // si algo cambia quiero recordar el nuevo resultado
    // la dependencia me dira cuando debo recordar un nuevo valor
    // de la funcion que le paso al useMemo
    // por ende mi "memoProcesoPesado" el ultimo valor recordado.
    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

    return (
        <div className="container card">
            <div className="card-header bg-primary">
                <h2 className="text-white">MemoHook</h2>
            </div>
            <div className="card-body">
                <TitleCounter value={ counter }/>
                <h2>
                    <span className="badge badge-secondary">
                        { memoProcesoPesado }
                    </span>
                </h2>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success"
                    onClick={ increment }>
                    Igrement
                </button>
                <button className="btn btn-outline-danger"
                    onClick={ () => setShow( !show ) }>
                    Show/Hide { JSON.stringify( show ) }
                </button>
            </div>
        </div>
    )
}
