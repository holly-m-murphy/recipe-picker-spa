import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation'
import Footer from './Footer'
import MainContent from './MainContent'
import AddRecipe from './AddRecipe'
import RemoveRecipe from './RemoveRecipe'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Navigation />
          <Route path="/" component={MainContent} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/remove-recipe" component={RemoveRecipe} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
