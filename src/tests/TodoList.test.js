import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../components/08-useReducer/components/TodoList';
import { demoTodos } from '../data/demoTodo';
describe('Pruebas en el <TodoList />', () => {
    const handleDelete = jest.fn();
    const hanldeToggleTodo = jest.fn();
    const wrapper = shallow( 
        <TodoList 
            todos={ demoTodos }
            handleDelete={ handleDelete }
            hanldeToggleTodo={ hanldeToggleTodo }
        /> 
    );        
    test('Debe hacer match con la instantanea.', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('Debe de haber 2 <TodoListItem />', () => {
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );        
    });
});
