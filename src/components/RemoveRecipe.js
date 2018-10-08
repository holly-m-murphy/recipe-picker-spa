import React, { Component } from 'react';
import DisplayRecipeContainer from "./../containers/DisplayRecipeContainer"

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

    render() {
        return (
            <div className="">
                <div className="row container additional-top-margin-button ">


                    <DisplayRecipeContainer recipe={{ title: "test", author: "test author" }} />
                </div>

            </div>
        )
    }
}

export default RemoveRecipe;
