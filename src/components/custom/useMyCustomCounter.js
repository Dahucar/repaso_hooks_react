import { useState } from "react"

export const useMyCustomCounter = ( initialValue = 99) => {
    const [state, setState] = useState( initialValue );

    const increment = ( factor = 1 ) => {
        setState( state + parseInt( factor ) );
    }

    const decrement = ( factor = 1 ) => {
        setState( state - parseInt( factor ) );
    }

    const setDefaultValue = () => {
        setState( initialValue );
    }

    return {
        state,
        increment,
        decrement,
        setDefaultValue
    }
}