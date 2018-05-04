import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Navigation extends Component {



    render() {

        return (
            <nav>
                <div className="nav-wrapper light-blue darken-4">
                    <a href="#" className="brand-logo left blue-text text-lighten-5">Recipe Picker</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="" ><Link to="/add-recipe" ><i className="material-icons">add_circle</i></Link></a></li>
                        <li><a href=""><Link to="/remove-recipe"><i className="material-icons">highlight_off</i></Link></a></li>
                        <li><a href=""><Link to="/menu" ><i className="material-icons">restaurant_menu</i></Link></a></li>
                    </ul>

                </div>
            </nav>
        );
    }

}

export default Navigation;
