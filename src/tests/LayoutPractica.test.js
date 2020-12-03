import React from 'react';
const { shallow } = require("enzyme");
const { LayoutPractica } = require("../components/05-useLayoutEffect/LayoutPractica");

describe('Test in 05-hooks components ', () => {
    const wrapper = shallow( <LayoutPractica  /> );     
    test('Should be macht with the Snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });
});
