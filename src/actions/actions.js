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
    const response = await api.removeRecipe(title)
    const loadResponse = await api.loadRecipes()
    dispatch(saveRecipes(loadResponse.data.body.recipes))
}

export { loadRecipes, saveRecipes, removeRecipe }


