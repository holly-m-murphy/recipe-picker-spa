

const loadRecipes = (recipes) => {
    return {
        type: 'LOAD_RECIPES',
        recipes
    }
}

export { loadRecipes }
