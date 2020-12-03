import { todoReducer } from "../components/08-useReducer/todoReducer";
import { demoTodos } from "../data/demoTodo";

describe('Pruebas en el todoReducer', () => {
    test('Debe de retornar el estado por defecto.', () => {
        const state = todoReducer( demoTodos, {} );
        expect( state ).toEqual( demoTodos ); 
    });
    test('Debe crearse un nuevo todo.', () => {
        const newTodo = {
            id: new Date().getTime(),
            desc: 'Aprender Jest',
            done: false
        }
        const stateTodos = todoReducer( demoTodos, { type: 'add', payload: newTodo } );
        expect( stateTodos.length ).toBe( 3 ); 
        expect( stateTodos ).toEqual( [ ...demoTodos, newTodo ] ); 
    });
    test('Debe eliminar un todo por su id.', () => {
        const stateTodos = todoReducer( demoTodos, { type: 'delete', payload: 1 } );
        expect( stateTodos.length ).toBe( 1 ); 
    });
    test('Debe actualizar el "done" de un todo por su id.', () => {
        const stateTodos = todoReducer( demoTodos, { type: 'toggle', payload: 1 } );
        expect( stateTodos[0].done ).toBe( true ); 
    });
});
