import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCustomEffect } from '../../hooks/useCustomEffect'
import { useCustomCounter } from '../01-useState/useCustomCounter';

export const LayoutPractica = () => {

    const { state:counter, increment, decrement } = useCustomCounter(1);
    const { data } = useCustomEffect( 'https://www.breakingbadapi.com/api/quotes/'+counter );
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    // Usando useLayoutEffect -> SIMILAR A useEffect
    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [ quote ])

    return (
        <div className="container card">
            <div className="card-header">
                <h2>LayoutPractica</h2>
            </div>
            <div className="card-body">
                <div>
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> quote - { counter } </p>
                        <p className="mb-0" ref={ pTag }> { quote } </p>
                    </blockquote>
                    <pre>
                        { JSON.stringify( boxSize, null, 3 ) }
                    </pre>
                    <button className="btn btn-success"
                        onClick={ increment }>
                        Siguiente
                    </button>
                    <button className="btn btn-danger"
                        onClick={ decrement }>
                        Volver
                    </button>
                </div> 
            </div>
        </div>
    )
}
