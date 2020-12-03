import React from 'react';
import { shallow } from "enzyme";
import { FormAddTodo } from "../components/08-useReducer/components/FormAddTodo";
describe('Pruebas en <FormAddTodo/>', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow( <FormAddTodo handleAddTodo={ handleAddTodo } /> );
    test('Debe de hacer match con la instantanea', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('No debe de llamar al handleAddTodo', () => {
        const formSub = wrapper.find('form').prop('onSubmit');
        formSub({ preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes( 0 );
    });
    test('Debe de llamar la funcion handleAddTodo y reset', () => {
        const value = 'Agregando TODO';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'desc'
            }
        });
        const formSub = wrapper.find('form').prop('onSubmit');
        formSub({ preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );
        //Permite cualquier obj de JS
        expect( handleAddTodo ).toHaveBeenLastCalledWith( expect.any(Object) );
        //Permite un obj en espesifico
        expect( handleAddTodo ).toHaveBeenLastCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        //Evalua que el reset establesca a vacio el valor del input
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});
