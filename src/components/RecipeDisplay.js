import React, { Component } from 'react';

class RecipeDisplay extends Component {



    render() {

        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card light-blue darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.recipe.title}</span>
                            <p>{this.props.recipe.author}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Expand recipe...</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RecipeDisplay;
