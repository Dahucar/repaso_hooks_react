import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, hanldeToggleTodo, handleDelete }) => {
    return (
        <div className="card">
            {/* <TodoList todos, hanldeToggleTodo, handleDelete /> */}
            <ul className="list-group list-group-flush">
                {/* <TodoListItem todoItem, index, hanldeToggleTodo, handleDelete/> */}
                {
                    todos.map( (todo, i) => (
                        <TodoListItem 
                            key={ todo.id }
                            todo={ todo } 
                            index={ i } 
                            hanldeToggleTodo={ hanldeToggleTodo }
                            handleDelete={ handleDelete }
                        />
                    ))
                }
            </ul>
        </div>
    )
}
