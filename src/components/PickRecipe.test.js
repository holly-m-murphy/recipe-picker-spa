
import React from 'react';
import { shallow } from 'enzyme';
import PickRecipe from './PickRecipe';

describe("PickRecipe component", async () => {
    it("should display the pick recipe button", async () => {

        const wrapper = shallow(<PickRecipe />)

        expect(wrapper.instance().state.recipe).toEqual(null)
        expect(wrapper.find("#pick-a-recipe-button").exists())
    })
    it("should update the local state recipe with the chosen recipe based off the randomly generated number", async () => {

        const props = {
            recipes:[{title: "test title one"},{title: "test title two"}, {title: "test title three"}]
        }
        const wrapper = shallow(<PickRecipe { ...props } />)
        wrapper.find("#pick-a-recipe-button").simulate('click')

        expect(wrapper.instance().state.recipe.title).not.toBe(null)

    })

})

