const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'Daniel',
        email: 'dan.gmail.com'
    }
    test('Debe de regresar un formulario por defecto.', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [values, handleInputChangue, resetInputsValues] = result.current;
        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChangue ).toBe( 'function' );
        expect( typeof resetInputsValues ).toBe( 'function' );
    });
    test('Debe de cambiar el valor del formulario (nombre)', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChangue] = result.current;
        act( () => { 
            handleInputChangue({ 
                target: {
                    name: 'name',
                    value: 'Alejandro'
                }
            }) 
        });
        const [ values ] = result.current;
        expect( values ).toEqual({ ...initialForm, name: 'Alejandro' });
    });
    test('Debe de cambiar el valor del formulario (Reset)', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChangue, resetInputsValues ] = result.current;
        act( () => { 
            handleInputChangue({ 
                target: {
                    name: 'name',
                    value: 'Alejandro'
                }
            }) 
            resetInputsValues();
        });
        const [ values ] = result.current;
        expect( values ).toEqual( initialForm );
    });
});
