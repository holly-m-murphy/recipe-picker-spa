import axios from 'axios'

export const saveRecipe = (recipe) => {
    console.log(`calling api with: `, recipe)
    axios.post('http://localhost:8000/add-recipe',
        recipe).then(function (response) {
            console.log(response);
            return response
        }).catch(function (error) {
            // todo: handle error
            console.log(error)
        })
}

export const pickRecipe = () => {
    console.log(`calling api to pick recipe`)
}

export const loadRecipes = async () => {
    try {
        const fetchResult = await axios.get('http://localhost:8000/fetch-recipes')
        return fetchResult
    } catch (e) {
        // todo: handle error
        console.log(`Error in api while fetching recipes: `, e)
    }
}


export default { saveRecipe, loadRecipes }