const { shallow } = require("enzyme");
const { HomePage } = require("../components/09-useContext/pages/HomePage");
const { UserContext } = require("../components/09-useContext/UserContext");

describe('Prueba en el <HomePage />', () => {
    const user = {
        name: 'Daniel',
        email: 'dan.gmail'
    }
    const wrapper = shallow( 
        <UserContext.Provider value={{ user }}>
            <HomePage />
        </UserContext.Provider>
    );
    test('Debe hacer match con la instantanea,', () => {
        expect( wrapper ).toMatchSnapshot();
    });
});
