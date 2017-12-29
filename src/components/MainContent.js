import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'


class MainContent extends Component {
    state = {
        redirect: false
    }

    addRecipe = () => {
        console.log(`addingRecipeAction`)
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/add-recipe" />
        }
        return (
            <div className=" white">
                <div className="row remove-margin-on-row">
                    <i className=" col s2 offset-s2 large material-icons icon-extra-margin light-blue-text text-darken-4" onClick={this.addRecipe}>add_circle</i>
                    <i className="col s3  offset-s1 large material-icons icon-extra-margin light-blue-text text-darken-4" >highlight_off</i>
                    <i className="col s4 large material-icons icon-extra-margin light-blue-text text-darken-4">restaurant_menu</i>
                </div>
            </div>
        );
    }
}

export default MainContent;
