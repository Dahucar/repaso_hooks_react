import React, { useState } from 'react'
import { useCustomCounter } from '../01-useState/useCustomCounter'
import { TitleCounter } from './TitleCounter';

export const Memorize = () => {
    const { state: counter, increment } = useCustomCounter(567);
    const [show, setShow] = useState(true);
    return (
        <div className="container card">
            <div className="card-header bg-primary">
                <h2>Memorize</h2>
            </div>
            <div className="card-body">
                <TitleCounter value={ counter }/>
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
