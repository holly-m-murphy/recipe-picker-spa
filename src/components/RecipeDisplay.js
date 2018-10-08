import React, { Component } from 'react';

class RecipeDisplay extends Component {

    state = {
        expanded: false
    }

    expandRecipe = (e) => {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded
        })
    }



    prepSteps = () => {
        const steps = []
        if (this.props.recipe.preparationList) {
            this.props.recipe.preparationList.map((step, ind) => {
                steps.push(<li key={ind}>{step}</li>)
            })
        }

        return steps
    }


    render() {
        console.log(`recipe: `, this.props.recipe)
        return (
            <div className="row">
                <div className="col m9 offset-m1">
                    <div className="card light-blue darken-4">
                        <div className="card-content white-text">
                            <span className="card-title center-align">{this.props.recipe.title}</span>
                            <p className="center-align">{this.props.recipe.author}</p>
                        </div>
                        <div className="card-action white-text">
                            <a href="#" onClick={this.expandRecipe}>Expand recipe...</a>
                            {this.state.expanded === true && (
                                <div>
                                    {this.props.recipe.ingredients}
                                    <div className="padded"></div>
                                    {/*<p>{this.props.recipe.ingredientList ? this.props.recipe.ingredientList : null}</p>*/}
                                    {/*<ul>{this.props.recipe.preparationList ? this.props.recipe.preparationList : null}</ul>*/}
                                    <div className="no-bullets">{this.props.recipe.preparations}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RecipeDisplay;
