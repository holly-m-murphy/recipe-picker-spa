import React, { Component } from 'react';
import { Link, Redirect } from 'react-dom'


class Navigation extends Component {

    state = {
        addRecipeRedirect: false,
        deleteRecipeRedirect: false,
        findRecipe: false
    }
    addRecipe = () => {
        console.log(`updating`)
        this.setState({
            addRecipeRedirect: true
        })
    }
    render() {
        if (this.state.addRecipeRedirect) {
            return <Redirect push to="/add-recipe" />
        }
        return (
            <nav>
                <div className="nav-wrapper light-blue darken-4">
                    <a href="#" className="brand-logo center blue-text text-lighten-5">Recipe Picker</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="" onClick={this.addRecipe}><i className="material-icons">add_circle</i></a></li>
                        <li><a href=""><i className="material-icons">highlight_off</i></a></li>
                        <li><a href=""><i className="material-icons">restaurant_menu</i></a></li>
                    </ul>

                    {/*<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#" className="blue-text text-lighten-5">Add a Recipe</a></li>
                        <li><a href="#" className="blue-text text-lighten-5">Remove a Recipe</a></li>
                        <li><a href="#" className="blue-text text-lighten-5">Pick a Recipe</a></li>
                    </ul>
                    <ul class="side-nav" id="mobile-demo">
                        <li><a href="#" className="blue-text text-lighten-5">Add a Recipe</a></li>
                        <li><a href="#" className="blue-text text-lighten-5">Remove a Recipe</a></li>
                        <li><a href="#" className="blue-text text-lighten-5">Pick a Recipe</a></li>
                    </ul>*/}

                </div>
            </nav>
        );
    }

}

export default Navigation;
