import * as actions from "./actions"
import * as api from "./../api"

describe("actions", async () => {
    it("should return an action type to save recipes", async () => {
        const recipes = {
            ingredients: ["ingred 1", "ingred 2"],
            preparationSteps: ["step 1", "step 2"],
            title: "recipe title",
            author: "some author"
        }
        const result = actions.saveRecipes(recipes);

        expect(result.recipes.author).toEqual("some author")
        expect(result.recipes.title).toEqual("recipe title")
        expect(result.recipes.ingredients).toEqual(["ingred 1", "ingred 2"])
        expect(result.recipes.preparationSteps).toEqual(["step 1", "step 2"])
        expect(result.type).toEqual("LOAD_RECIPES")
    })

})
