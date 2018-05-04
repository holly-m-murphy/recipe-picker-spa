
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Footer component", async () => {
    it("should display the footer", async () => {
        const wrapper = shallow(<Footer />)

        expect(wrapper.find(".footer-copyright").children().at(0).text()).toEqual("Last Updated: Dec 2017")
    })

})


