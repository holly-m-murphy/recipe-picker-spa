import { shallow } from "enzyme"
import React from "React"
import DisplayRecipeContainer from "./DisplayRecipeContainer"
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe("DisplayRecipeContainer container", async () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            recipes: ["recipe1", "recipe2"]
        };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <DisplayRecipeContainer store={store} />
        );
    });



    it("should map state to props", async () => {
        expect(wrapper.props().recipes).toEqual(["recipe1", "recipe2"])
    })

})


