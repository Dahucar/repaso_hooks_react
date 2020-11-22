import React, { useState } from 'react'

export const CounterApp = () => {

    //Creating the useState hook with primitive values
    //const [ counter, setCounter ] = useState( 10 );    
    
    //creating the useState hook with object 
    const [ state, setSate ] = useState({ 
        counter1: 79,
        counter2: 9,
        counter3: 91
    });

    // Obtein the properties i need from my state.
    const { counter1, counter2, counter3 } = state;

    // increment all value for my state
    const incrementValue = () => {
        setSate({
            counter1: counter1 + 1,
            counter2: counter2 + 1,
            counter3: counter3 + 1
        });
    }

    // decrement all value for my state
    const decrementValue = () => {
        setSate({
            counter1: counter1 - 1,
            counter2: counter2 - 1,
            counter3: counter3 - 1
        });
    }

    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h3>Counter App - UseState</h3>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary" 
                        onClick={ incrementValue }>
                        Increment all counters: <span className="badge badge-light">{ counter1 }</span>
                    </button>
                    <button type="button" className="btn btn-warning" 
                        onClick={ decrementValue }>
                        <span className="badge badge-light">{ counter3 }</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
