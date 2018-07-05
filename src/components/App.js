import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Footer from './Footer'
import MainContent from './MainContent'
import AddRecipe from './AddRecipe'
import RemoveRecipeContainer from './../containers/RemoveRecipeContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {

  render() {
    console.log(React.version);
    return (
      <Router>
        <div className="">
          <Navigation />
          <MainContent />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/remove-recipe" component={RemoveRecipeContainer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
