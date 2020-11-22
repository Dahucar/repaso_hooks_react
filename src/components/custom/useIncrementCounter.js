import { useState } from "react"

export const useIncrementCounter = ( initialValues = {} ) => {
    const [formValues, setFormValues] = useState( initialValues );

    const handleCustomInputChangue = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });
    }

    return [ formValues, handleCustomInputChangue ]
}