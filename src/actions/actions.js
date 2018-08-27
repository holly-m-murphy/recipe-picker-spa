import api from "./../api"

const saveRecipes = (recipes) => {

    return {
        type: 'LOAD_RECIPES',
        recipes
    }
}
const loadRecipes = () => async (dispatch, getState) => {
    const response = await api.loadRecipes()
    dispatch(saveRecipes(response.data.recipes))
}

export { loadRecipes }


