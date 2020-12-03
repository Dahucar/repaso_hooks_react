import { mount } from "enzyme";
import { LoginPage } from "../components/09-useContext/pages/LoginPage";
import { UserContext } from "../components/09-useContext/UserContext";

describe('Pruebas en el <LoginPage/>', () => {
    const user = {
        name: 'Daniel',
        email: 'daniel.gmail'
    }
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <LoginPage />
        </UserContext.Provider>
    );
    test('Debe hacer match con la instantanea', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('Debe de ejecutar el setUset con el argumento', () => {
       wrapper.find('button').prop('onClick');
       expect( setUser ).toHaveBeenCalledWith({
        id: new Date().getTime(),
        completeName: 'Daniel Huenul Cárcamo.'
    }); 
    });
    
});
