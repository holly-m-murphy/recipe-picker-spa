import axios from 'axios'

export const saveRecipe = (recipe) => {
    console.log(`calling api with: `, recipe)
    axios.post('http://localhost:8000/add-recipe',
        recipe).then(function (response) {
            console.log(response);
            return response
        }).catch(function (error) {
            console.log(error)
        })
}


export default (saveRecipe)