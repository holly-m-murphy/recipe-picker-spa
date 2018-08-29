import React, { Component } from 'react';
import { Input } from 'react-materialize'
import pickRecipe from './../api'
import DisplayRecipeContainer from './../containers/DisplayRecipeContainer'


class PickRecipe extends Component {

    state = {
        recipe: null
    }

    pickRecipe = (e) => {
        const recipeChoice = Math.floor(Math.random() * this.props.recipes.length);
        this.setState({
            recipe: this.props.recipes[recipeChoice]
        })
    }

    render() {
        return (
            <div>
                <div className="row container">
                    <div id="pick-a-recipe-button" className=" btn  light-blue darken-4 col s5 offset-s3" onClick={this.pickRecipe}>Pick a Recipe!</div>
                </div>
                <div className="row container">
                    {this.state.recipe ? <DisplayRecipeContainer recipe={this.state.recipe} /> : null}
                </div>
            </div >
        )
    }
}

export default PickRecipe;
