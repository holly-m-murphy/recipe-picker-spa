
import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { Link } from 'react-router';

describe("navigation component", async () => {
    it("should display the navigation", async () => {
        const wrapper = shallow(<Navigation />)

        expect(wrapper.find('Link').at(0).props().to).toEqual('/add-recipe')
        expect(wrapper.find('Link').at(1).props().to).toEqual('/remove-recipe')
        expect(wrapper.find('Link').at(2).props().to).toEqual('/menu')
    })
})


