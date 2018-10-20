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

    deleteRecipe = (e) =>{
        const ind = e.target.id
        console.log(`removing recipe from deleteRecipe: `,this.props.recipes[ind].title )
        this.props.removeRecipe(this.props.recipes[ind].title)
    }

    recipeList = () => {
        return this.props.recipes.map((recipe,ind) => {
            return <li key={ind} className="collection-item"><div>{recipe.title}<a href="#!" className="secondary-content "><i id={ind} className="material-icons blue-text text-darken-4" onClick={this.deleteRecipe}>delete</i></a></div></li>
        })
    }

    render() {
        return (
            <div className="">
                <div className="row container additional-top-margin-button ">


                    <ul className="collection with-header">
                        {this.recipeList()}
                    </ul>
                </div>

            </div>
        )
    }
}

export default RemoveRecipe;
