const { renderHook, act } = require("@testing-library/react-hooks");
const { useCustomCounter } = require("../../components/01-useState/useCustomCounter");

describe('Testing in useCustomCounter', () => {
    test('should be return default values', () => {
        const { result } = renderHook( () => useCustomCounter() );   
        expect( result.current.state ).toBe( 8 );
        expect(  typeof result.current.increment ).toBe( 'function' );
        expect(  typeof result.current.decrement ).toBe( 'function' );
        expect(  typeof result.current.defaultValue ).toBe( 'function' );
    });

    test('must return the value assigned in the declaration', () => {
        const initialValue = 77;
        const { result } = renderHook( () => useCustomCounter( initialValue ) );
        expect( result.current.state ).toBe( initialValue );
    });
    
    test('must increment the default value with one value', () => {
        const { result } = renderHook( () => useCustomCounter( 2 ) );
        const { increment } = result.current;
        act( () => { increment(); });
        const { state } = result.current;
        expect( state ).toBe( 3 );
    });
    
    test('must decrement the default value with one value', () => {
        const { result } = renderHook( () => useCustomCounter( 5 ) );
        const { decrement } = result.current;
        act( () => { decrement(); });
        const { state } = result.current;
        expect( state ).toBe( 4 );
    });
    
    test('must set the default value in the state', () => {
        const { result } = renderHook( () => useCustomCounter( 7 ) );
        const { decrement, defaultValue } = result.current;
        act( () => { decrement(); defaultValue(); });
        const { state } = result.current;
        expect( state ).toBe( 7 );
    });
});
