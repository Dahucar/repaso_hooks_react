import React from 'react'

export const TodoListItem = ({ todo, index, hanldeToggleTodo, handleDelete }) => {
    return (
        <li className="list-group-item">
            <p className={ `${ todo.done && 'complete' }` }
                onClick={ () => hanldeToggleTodo( todo.id ) }    
            >
                <span className={ `mr-2 badge badge-pill ${ todo.done ? 'badge-success' : 'badge-danger' }` }>
                    { index + 1 }
                </span>
                { todo.desc }
            </p>
            <button className="btn btn-danger btn-sm"
                onClick={ () => handleDelete( todo.id ) }>
                Quitar
            </button>
        </li>
    )
}
