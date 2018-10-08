import React from "React"
import { shallow } from "enzyme"
import MainContent from "./MainContent"

describe("MainContent component", async () => {
    it("should display the main content page", async () => {
        const wrapper = shallow(<MainContent />)

        expect(wrapper.find("#add-recipe").text()).toEqual("add_circle")
        expect(wrapper.find("#delete-recipe").text()).toEqual("highlight_off")
        expect(wrapper.find("#pick-recipe").text()).toEqual("restaurant_menu")

    })
})