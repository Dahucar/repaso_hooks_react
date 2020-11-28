import React, { useEffect, useReducer } from 'react'
import { FormAddTodo } from './components/FormAddTodo';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';

//const initialState = [{
//    id: new Date().getTime(),
//    desc: 'React: practica reducer.',
//    done: false
//}];

const init = () => {
    //traera del localStorage las todos guardadas o bien un arreglo vacio
    // en caso de no tener contenido.
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
    /*
        -> useReducer(reducer, initialState, init)
        reducer: es la funcion que se deberá crear. (creado en otro archivo)
        initialState: es el estado inicial que le daremos.
        init: es una funcion para inicializar el state.

        -> const [state, dispatch]
        dispatch: permite disparar las acciones para que react redibuje los cambios en pantalla.
        state: el estado actual.
    */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);
    
    // Elimina elemento del todo list
    const handleDelete = ( todoId ) => {
        // crear la accion
        const deleteTodoReducer = {
            type: 'delete',
            payload: todoId
        }
        // hacer el dispatch
        dispatch( deleteTodoReducer );
    }

    // Actualizar estado de todo.
    const hanldeToggleTodo = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    // añade un nuevo todo -> esta funcion es enviada al FormAddTodo component
    const handleAddTodo = newTodo => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    } 

    return (
        <div className="containe-fluid card">
            <div className="card-header">
                <h2>TodoApp</h2>
            </div>
            <div className="card-body">
                <div className="card">
                    <div className="row">
                        <div className="col-8">
                            <TodoList 
                                todos={ todos } 
                                hanldeToggleTodo={ hanldeToggleTodo }
                                handleDelete={ handleDelete } 
                            />
                        </div>
                        <div className="col-4">
                            <FormAddTodo 
                                handleAddTodo={ handleAddTodo }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
