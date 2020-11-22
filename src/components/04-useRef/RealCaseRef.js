import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealCaseRef = () => {

    // Caso de real para uso de hook useRef: Mostrar componente de manera condicional.

    const [show, setShow] = useState(false);

    return (
        <div className="container card">
            <div className="card-header">
                <h2>RealCaseRef</h2>
            </div>
            <div className="card-body">
                { show && <MultipleCustomHooks />}
            </div>
            <div className="card-footer">
                <button 
                    type="button" 
                    className="btn btn-success btn-lg btn-block"
                    onClick={ () => { setShow(!show) } }
                >
                    { show ? 'Ocultar' : 'Mostrar' }
                </button>
            </div>
        </div>
    )
}
