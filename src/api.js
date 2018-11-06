import axios from 'axios'

export const saveRecipe = async (recipe) => {
    axios.post('http://recipepickerapi.dr2n9pg5m8.us-east-1.elasticbeanstalk.com/add-recipe',
        recipe).then(function (response) {
            return response
        }).catch(function (error) {
            console.log(`error: `, error)
        })
}


export const loadRecipes = async () => {
    try {
        const fetchResult = await axios.get('http://recipepickerapi.dr2n9pg5m8.us-east-1.elasticbeanstalk.com/fetch-recipes')
        return fetchResult
    } catch (e) {
        // todo: handle error
        console.log(`Error in api while fetching recipes: `, e)
    }
}

export const removeRecipe = async (recipeTitle) => {
    try {
        const removeResult = await axios.delete('http://recipepickerapi.dr2n9pg5m8.us-east-1.elasticbeanstalk.com/remove-recipe', { data: { title: recipeTitle } })
        return removeResult
    } catch (e) {
        console.log(`Error in api while removing recipe: `, e)
    }
}


export default { saveRecipe, loadRecipes, removeRecipe }