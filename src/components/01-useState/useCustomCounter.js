import { useState } from "react"

export const useCustomCounter = ( initialState = 8 ) => {
    const [state, setState] = useState( initialState );

    const increment = ( factor = 1 ) => {
        setState( state + factor );
    }

    const decrement = ( factor = 1 ) => {
        setState( state - factor );
    }

    const defaultValue = () => {
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        defaultValue
    }
}