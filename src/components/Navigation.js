import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Navigation extends Component {

    state = {
        addRecipeRedirect: false,
        deleteRecipeRedirect: false,
        findRecipe: false
    }
    // addRecipe = () => {
    //     console.log(`updating`)
    //     this.setState({
    //         addRecipeRedirect: true
    //     })
    // }
    render() {
        // if (this.state.addRecipeRedirect) {
        //     return <Redirect push to="/add-recipe" />
        // }
        return (
            <nav>
                <div className="nav-wrapper light-blue darken-4">
                    <a href="#" className="brand-logo left blue-text text-lighten-5">Recipe Picker</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="" ><Link to="/add-recipe" ><i className="material-icons">add_circle</i></Link></a></li>
                        <li><a href=""><Link to="/remove-recipe"><i className="material-icons">highlight_off</i></Link></a></li>
                        <li><a href=""><Link to="/menu" ><i className="material-icons">restaurant_menu</i></Link></a></li>
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
