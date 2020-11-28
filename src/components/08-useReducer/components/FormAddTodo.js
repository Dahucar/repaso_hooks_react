import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const FormAddTodo = ({ handleAddTodo }) => {
    const [ { desc }, handleInputChangue, resetInputsValues ] = useForm({
        desc: ''
    });
    const handleSubmit = ( e ) => {
        e.preventDefault();
        // validacion basica de entrada. 
        if (desc.trim().length <= 1) {
            return;
        }        
        // creando la nueva todo / tarea
        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }
        // enviamos la accion mediante el dispatch al reducer
        handleAddTodo( newTodo );
        resetInputsValues();
    }
    return (
        <>
            <h3 className="text-center">Agregar todo</h3>
            <hr />
            <form className="mr-4">
                <input 
                    type="text"
                    name="desc" 
                    className="form-control"
                    placeholder="Ingrese tarea" 
                    autoComplete="off" 
                    value={ desc }
                    onChange={ handleInputChangue }
                />
                <button
                    type="submit"
                    className="btn btn-outline-success mt-1 btn-block"
                    onClick={ handleSubmit }
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
