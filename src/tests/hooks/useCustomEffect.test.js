const { renderHook } = require("@testing-library/react-hooks");
const { useCustomEffect } = require("../../hooks/useCustomEffect");

describe('Pruebas sobre el useCustomEffect.js', () => {
    test('Debe mostrar la informacion por defecto.', () => {
        const { result } = renderHook( () => useCustomEffect( 'https://www.breakingbadapi.com/api/quotes/1' ));
        const { data, loading, error } = result.current;
        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
    });
    test('Debe de tener la informacion desea cargada correctamente.', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useCustomEffect( 'https://www.breakingbadapi.com/api/quotes/1' ));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    }); 
    test('Debe de tener mostrar la informacaión establecida en caso de error.', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useCustomEffect( 'https://reqres.in/apid/users?page=2' ));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'Error en la petición.' );
    });
});
