import React, { Component } from 'react';
import { Input } from 'react-materialize'
import { saveRecipe } from './../api'


class AddRecipe extends Component {

    state = {
        author: "",
        displayResponse: null,
        ingredients: "",
        preparations: "",
        title: ""
    }

    handleChange = (e) => {
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }


    preparationCard = () => {
        return (<div className="card col s5 offset-s1 ">
            <div className="card-content">
                <textarea name="preparations" id="preparations" className="materialize-textarea" data-length="25000" value={this.state.preparations} onChange={this.handleChange}></textarea>
            </div>
        </div>)
    }
    ingredientCard = () => {
        return (<div className="card col s5 ">
            <div className="card-content">
                <textarea name="ingredients" id="ingredients" className="materialize-textarea" data-length="25000" value={this.state.ingredients} onChange={this.handleChange}></textarea>
            </div>
        </div>)
    }

    addStep = () => {
        return (<div>
            <form className=" col s6">
                <div className="row">
                    <h5 className="col s12 additional-top-margin">Enter preparation steps:</h5>
                </div>

            </form>
        </div>)
    }

    enterAnIngredient = () => {
        return (<div>
            <form className=" col s6">
                <div className="row">
                    <h5 className="col s12 additional-top-margin" onChange={this.handleChange}>Enter ingredients:</h5>
                </div>

            </form>
        </div>)
    }

    handleSaveRecipe = async () => {
        saveRecipe(this.state)
        this.setState({
            author: "",
            displayResponse: true,
            ingredients: "",
            preparations: "",
            title: ""
        })

    }

    render() {
        return (
            <div>
                <div className="row container">
                    <div className="row">
                        {this.state.displayResponse ? <div className="response-message">Successfully added recipe!</div> : null}
                    </div>

                    <div className="input-field col s6">
                        <Input name="title" id="title" type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange} end ></Input>
                    </div>


                    <div className="input-field col s6">
                        <Input name="author" id="author" type="text" placeholder="Author" value={this.state.author} onChange={this.handleChange} end ></Input>
                    </div>
                </div>
                <div className="row container ">


                    {this.enterAnIngredient()}
                    {this.addStep()}
                </div>
                <div className="row container">
                    {this.ingredientCard()}
                    {this.preparationCard()}
                </div>
                <div className="row container">

                    <a className=" btn light-blue darken-4 blue-text text-lighten-5" onClick={this.handleSaveRecipe} >Save Recipe</a>
                </div>
            </div >
        )
    }
}

export default AddRecipe;