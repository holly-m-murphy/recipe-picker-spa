
import React from 'react';
import { shallow } from 'enzyme';
import RecipeDisplay from './RecipeDisplay';

describe("RecipeDisplay component", async () => {
    it("should display the title and author of the recipe", async () => {
        const props = {
            title: "Recipe Title",
            author: "Author"
        }
        const wrapper = shallow(<RecipeDisplay { ...props } />)

        expect(wrapper.instance().state.searchText).toEqual("testing")
    })

})

