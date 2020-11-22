import React from 'react'
import { useIncrementCounter } from './useIncrementCounter';
import { useMyCustomCounter } from './useMyCustomCounter';

export const CounterCustomApp = () => {

    const [ formValues, handleCustomInputChangue ] = useIncrementCounter({
        increment: 1,
        decrement: 1
    });

    const { increment, decrement } = formValues;
    const { state, increment: funcIncrement, decrement: funcDecrement, setDefaultValue } = useMyCustomCounter();

    return (
        <div className="container card">
            <div className="card-header">
                <h4 className="text-primary">Counter custom app</h4>
            </div>
            <div className="card-body">
                <h5>Valor del contador: { state } </h5>
                <div className="form-group">
                    <input 
                        type="number"
                        name="increment"
                        className="form-control"
                        placeholder="increment"
                        autoComplete="off"
                        value={ increment }
                        onChange={ handleCustomInputChangue }
                    />
                    <input 
                        type="number"
                        name="decrement"
                        className="form-control"
                        placeholder="decrement"
                        autoComplete="off"
                        value={ decrement }
                        onChange={ handleCustomInputChangue }
                    />
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-success"
                    onClick={ () => funcIncrement(increment) }>
                    Increment
                </button>
                <button className="btn btn-danger"
                    onClick={ () => funcDecrement(decrement) }>
                    Decrement
                </button>
                <button className="btn btn-warning"
                    onClick={ () => setDefaultValue() }>
                    Reset value
                </button>
            </div>
        </div>
    )
}
