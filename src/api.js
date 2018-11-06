import axios from 'axios'

export const saveRecipe = async (recipe) => {
    axios.post('http://localhost:8081/add-recipe',
        recipe).then(function (response) {
            return response
        }).catch(function (error) {
            console.log(`error: `, error)
        })
}


export const loadRecipes = async () => {
    try {
        const fetchResult = await axios.get('http://localhost:8081/fetch-recipes')
        return fetchResult
    } catch (e) {
        // todo: handle error
        console.log(`Error in api while fetching recipes: `, e)
    }
}

export const removeRecipe = async (recipeTitle) => {
    try {
        const removeResult = await axios.delete('http://localhost:8081/remove-recipe', { data: { title: recipeTitle } })
        return removeResult
    } catch (e) {
        console.log(`Error in api while removing recipe: `, e)
    }
}


export default { saveRecipe, loadRecipes, removeRecipe }