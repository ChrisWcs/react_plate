import jasmineEnzyme from 'jasmine-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

beforeEach(function() {
  jasmineEnzyme();
});

import React from 'react'
import {shallow} from 'enzyme'
import {addTwo} from '../src/MyMath'

const MyComp = () => (
    <div>
        Hello
    </div>
)

it('can i add two', () => {
    console.log(<MyComp></MyComp>)
    console.log(shallow(<MyComp></MyComp>))

    expect(addTwo(1,2)).toEqual(3)
})