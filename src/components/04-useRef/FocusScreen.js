import React, { useRef } from 'react'

export const FocusScreen = () => {

    // Lo usariamos para crear referencias mutables
    const inputRef = useRef();
    
    const handleCLick = () => {
        //de menera tradicional
        //document.querySelector('input').select();
        //usando un hook
        inputRef.current.select();
        //inputRef guardara la referencia del elemento html
        console.log(inputRef);
    }

    return (
        <div className="container card">
            <div className="card-header">
                <h2>Focus Screend</h2>
            </div>
            <div className="card-body">
                <input 
                    ref={ inputRef }
                    className="form-control"
                    placeholder="Ingrese nombre"
                />
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success"
                    onClick={ handleCLick }>
                    Click
                </button>
            </div>
        </div>
    )
}
