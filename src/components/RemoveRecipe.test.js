
import React from 'react';
import { shallow } from 'enzyme';
import RemoveRecipe from './RemoveRecipe';

describe("RemoveRecipe component", async () => {
    it("should capture user input in local state", async () => {
        const wrapper = shallow(<RemoveRecipe />)

        await wrapper.find('#title-search').simulate('change', { target: { name: "searchText", value: "testing" } })
        expect(wrapper.instance().state.searchText).toEqual("testing")
    })
    it("should fetch recipes when selecting the search icon and text has been entered by the user", async () => {
        const wrapper = shallow(<RemoveRecipe />)
        expect(wrapper.find("#recipe-list").children.contains()).toEqual(true)
    })
    it("should display an error message to the user when the search icon has been selected with no text being entered by the user", async () => {
        const wrapper = shallow(<RemoveRecipe />)

        expect(wrapper.instance().state.error.searchText).toEqual(true)
        expect(wrapper.find('#search-error').text()).toEqual("Please enter search criteria.")
    })
})


