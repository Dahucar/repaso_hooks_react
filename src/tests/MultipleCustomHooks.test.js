import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../components/03-examples/MultipleCustomHooks';
import { useCustomEffect } from '../hooks/useCustomEffect';
//importaciones usadas en <MultipleCustomHooks />
// jest.mock: simula el uso del elemento dado.
jest.mock('../hooks/useCustomEffect');

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('Debe hacer match con la instantanea.', () => {
        useCustomEffect.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
    });
    test('Demo de mostrar la informacion obtenida', () => {
        useCustomEffect.mockReturnValue({
            data: [{
                author: 'Daniel',
                quote: 'Una frase random.'
            }],
            loading: false,
            erros: null
        });    
        const wrapper = shallow( <MultipleCustomHooks /> );  
        expect( wrapper.find('.spinner-grow').exists() ).toBe( false );
        expect( wrapper.find('.blockquote-footer').text().trim() ).toBe( 'Daniel' );
    });
});
