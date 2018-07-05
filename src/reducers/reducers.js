
// initial state
const initialState = {
    showIcons: true
};

const saveRecipes = (recipes) => {
    recipes
}


// reducers update state 
const reducers = (state = initialState, action) => {
    console.log(`reducing...`, state)
    switch (action.type) {
        case "LOAD_RECIPES":
            saveRecipes(action.recipes);
            break;
        default:
            return state;
    }
};

export { reducers };
export default reducers;