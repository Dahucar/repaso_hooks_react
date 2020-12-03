import React from 'react';
import { mount, shallow } from "enzyme";
import { TodoApp } from "../components/08-useReducer/TodoApp";
import { demoTodos } from '../data/demoTodo';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow( <TodoApp />);
    test('Debe hacer match con la instantanea.', () => {
        expect( wrapper ).toMatchSnapshot(); 
    });
    test('Debe agregar un todo', () => {
        // para probar el componente, este trae info de los hijos y de su contexto de uso 
        // tiene problemas con versiones de React
        const wrapper = mount( <TodoApp /> ); 
        act(() => {
            wrapper.find('FormAddTodo').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('FormAddTodo').prop('handleAddTodo')( demoTodos[1] );
        });
    });
});
