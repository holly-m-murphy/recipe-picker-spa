import React, { Component } from 'react';

class RemoveRecipe extends Component {
    state = {
        searchText: '',
        error: {
            searchText: false
        }
    }

    handleChange = (e) => {
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    deleteRecipe = (e) => {
        const ind = e.target.id
        this.props.removeRecipe(this.props.recipes[ind]["S"].title)
    }

    recipeList = () => {
        return this.props.recipes.map((recipe, ind) => {
            return <li key={ind} className="collection-item"><div>{recipe.title["S"]}<a href="#!" className="secondary-content "><i id={ind} className="material-icons blue-text text-darken-4" onClick={this.deleteRecipe}>delete</i></a></div></li>
        })
    }

    nothingToDisplay = () => {
        return <div>No recipes to display! Please add one!</div>
    }


    render() {
        return (

            <div >
                <div className="row container additional-top-margin-button ">

                    <ul className="collection with-header">
                        {this.recipeList().length === 0 ? this.nothingToDisplay() : this.recipeList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default RemoveRecipe;
