import api from "./../api"

const saveRecipes = (recipes) => {

    return {
        type: 'LOAD_RECIPES',
        recipes
    }
}


const loadRecipes = () => async (dispatch, getState) => {
    const response = await api.loadRecipes()
    if (response && response.status === 200) {
        const recipes = response.data.body.recipes;
        dispatch(saveRecipes(recipes))
    }
}

const removeRecipe = (title) => async (dispatch, getState) => {
    console.log(`removing recipe in action`)
    const response = await api.removeRecipe(title)
    const loadResponse = await api.loadRecipes()
}

export { loadRecipes, saveRecipes, removeRecipe }


