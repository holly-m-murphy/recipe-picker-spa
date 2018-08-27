
// initial state
const initialState = () => {
    return {
        showIcons: true,
        recipes: []
    }
};

const saveRecipes = (recipes) => {
    console.log(`saving Recipes`, recipes)
    return recipes
}


// reducers update state 
const reducers = (state = initialState(), action) => {
    console.log(`reducing...`, state, action)
    switch (action.type) {
        case "LOAD_RECIPES":
            return { recipes: saveRecipes(action.recipes) };
        default:
            return state;
    }
};

export { reducers };
export default reducers;