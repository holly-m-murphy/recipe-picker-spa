import React, { Component } from 'react';

class RecipeDisplay extends Component {



    render() {

        return (
            <div class="row">
                <div class="col s12 m12">
                    <div class="card light-blue darken-4">
                        <div class="card-content white-text">
                            <span class="card-title">{this.props.recipe.title}</span>
                            <p>{this.props.recipe.author}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Expand recipe...</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RecipeDisplay;
