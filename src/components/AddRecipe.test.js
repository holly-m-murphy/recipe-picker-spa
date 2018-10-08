import { shallow } from "enzyme"
import React from "React"
import AddRecipe from "./AddRecipe"

describe("AddRecipe component", async () => {
    it("should set local state when an author is entered", async () => {
        const wrapper = shallow(<AddRecipe />)

        wrapper.find("#author").simulate('change', { target: { name: 'author', value: 'some author' } })

        expect(wrapper.state().author).toEqual("some author")
    })
    it("should set local state when a title is entered", async () => {
        const wrapper = shallow(<AddRecipe />)

        wrapper.find("#title").simulate('change', { target: { name: 'title', value: 'some title' } })

        expect(wrapper.state().title).toEqual("some title")
    })
    it("should set local state when ingredients are entered", async () => {
        const wrapper = shallow(<AddRecipe />)

        wrapper.find("#ingredients").simulate('change', { target: { name: 'ingredients', value: 'some ingredients' } })

        expect(wrapper.state().ingredients).toEqual("some ingredients")
    })
    it("should set local state when preparation steps are entered", async () => {
        const wrapper = shallow(<AddRecipe />)

        wrapper.find("#preparations").simulate('change', { target: { name: 'preparations', value: 'some steps to make food' } })

        expect(wrapper.state().preparations).toEqual("some steps to make food")
    })
})