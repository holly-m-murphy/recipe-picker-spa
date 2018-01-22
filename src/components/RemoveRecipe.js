import React, { Component } from 'react';


class RemoveRecipe extends Component {



    render() {
        return (
            <div className="">
                <div className="row container additional-top-margin-button ">
                    <div className="input-field col s4 offset-s4">
                        <textarea type="text" id="title-search " className="materialize-textarea remove-bottom-padding-and-margin" />
                        <label htmlFor="title-search remove-bottom-padding-and-margin">Search for a recipe: </label>
                    </div>

                    <a className="btn-floating light-blue darken-4 additional-top-margin-icon"><i className="material-icons">search</i></a>
                </div>

            </div>
        )
    }
}

export default RemoveRecipe;
