
import React from 'react';
import { shallow } from 'enzyme';
import RecipeDisplay from './RecipeDisplay';

describe("RecipeDisplay component", async () => {
    it.skip("should display the title and author of the recipe", async () => {
        const props = {
            recipes: [{title: "Recipe Title One", author:"Test Author One"}]
        }
        const wrapper = shallow(<RecipeDisplay { ...props } />)
        console.log(wrapper.debug())

        expect(wrapper.find(".card-title")).toEqual("Recipe Title One")
    })

})

