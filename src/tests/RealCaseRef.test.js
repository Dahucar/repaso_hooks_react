import { shallow } from 'enzyme';
import { RealCaseRef } from '../components/04-useRef/RealCaseRef';

describe('Pruebas en <RealCaseRef />', () => {
    const wrapper = shallow( <RealCaseRef /> );
    test('Debe de hacer match con su instantanea.', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    });
    test('Debe de mostrar el componente <MultipleCustomHooks/>', () => {
        wrapper.find( 'button' ).simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    });
});
