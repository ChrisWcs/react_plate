import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App';
import Title from '../src/Title';

describe("asdf", () => {
    it("asdf", () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find(<Title/>)).toHaveProp('a')
    })
})