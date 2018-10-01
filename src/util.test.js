import { makeArray } from "./util"

describe("util file: ", async () => {
    it("should form an array based on the blob and indicator provided", async () => {
        const blob = "For all purposes - sometimes-other text"
        const result = makeArray(blob, '-')

        expect(result.ok).toEqual(true)
        expect(result.createdArray).toEqual(["For all purposes ", " sometimes", "other text"])
    })

    it("should return ok: false when the indicator doesn't exist in the provided blob of text", async () => {
        const blob = "For all purposes"
        const result = makeArray(blob, '-')

        expect(result.ok).toEqual(false)
        expect(result.reason).toEqual(`There weren't any - found.`)
    })

    it("should form an array based on the ingredients passed in with the character to parse on", async () => {
        const blob = "For the cooked toppings:\n~1 batch All-Purpose Vegan Cheese Sauce*\n~1 large (450 g) sweet potato, peeled and chopped\n~2 teaspoons (10 mL) oil of choice\n~Fine sea salt, to taste\n~Chili powder, to taste\n~1 batch Spicy Black Beans**\nFor the fresh toppings:\n~1 bag tortilla chips of choice\n~1 medium (240 g) avocado (pitted and chopped) or ~guacamole***\n~2 medium (20 g) green onions, thinly sliced\n~3 to 4 tablespoons (45 to 60 mL) pickled jalapeños, drained****\n~1/3 cup (80 mL) chopped jarred roasted red pepper, drained\n1/4 cup (20 g) finely chopped purple cabbage\nHandful (12 g) fresh cilantro, chopped\nSalsa, to taste*****"
        const result = makeArray(blob, '~')

        expect(result.ok).toEqual(true)
        expect(result.createdArray[0]).toBe("For the cooked toppings:\n")
    })

})