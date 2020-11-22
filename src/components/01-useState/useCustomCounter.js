import { useState } from "react"

export const useCustomCounter = ( initialState = 8 ) => {
    const [state, setState] = useState( initialState );

    const increment = (/* factor = 1 */ ) => {
        setState( state + 1 );
    }

    const decrement = ( /* factor = 1 */) => {
        state === 0 ? defaultValue() : setState( state - 1 );
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