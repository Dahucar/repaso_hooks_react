import React from 'react'
import { useCustomCounter } from './01-useState/useCustomCounter'

export const HookApp = () => {

    const { state, increment, decrement, defaultValue } = useCustomCounter();

    return (
        <>
            <h3> {state} </h3>
            <button className="btn btn-success"
                onClick={() => increment(2)}>
                Increment
            </button>
            <button className="btn btn-primary"
                onClick={() => decrement(4)}>
                Decrement
            </button>
            <button className="btn btn-danger"
                onClick={defaultValue}>
                Default value
            </button>
        </>
    )
}
