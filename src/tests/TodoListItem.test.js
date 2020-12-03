import { shallow } from "enzyme";
import { TodoListItem } from "../components/08-useReducer/components/TodoListItem";
import { demoTodos } from "../data/demoTodo";

describe('Pruebas en el <TodoListItem />', () => {

    const hanldeToggleTodo = jest.fn();
    const handleDelete = jest.fn(); 

    const wrapper = shallow( 
        <TodoListItem 
            todo={ demoTodos[0] } 
            index={ demoTodos[0].id } 
            hanldeToggleTodo={ hanldeToggleTodo }
            handleDelete={ handleDelete }
        /> 
    );
    test('Debe hacer match con la instantanea', () => {
        expect( wrapper ).toMatchSnapshot();   
    });
    test('Debe de llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenLastCalledWith( demoTodos[0].id );
    });
    test('Debe de llamar la funcion hanldeToggleTodo', () => {
        wrapper.find('p').simulate('click');
        expect( hanldeToggleTodo ).toHaveBeenLastCalledWith( demoTodos[0].id ); 
    });
    test('Debe de mostrar el texto correctamente <p>', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe((demoTodos[0].id + 1)+demoTodos[0].desc);
    });
});
