import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'react-materialize'
import MainContent from './MainContent'


class AddRecipe extends Component {

    state = {
        ingredientList: [],
        preparationList: [],
        amount: "",
        measurement: "cup",
        ingredient: "",
        step: "",
        author: ""
    }

    addIngredient = (e) => {
        let arr = [...this.state.ingredientList]
        arr.push({ amount: this.state.amount, measurement: this.state.measurement, ingredient: this.state.ingredient })
        this.setState({
            ingredientList: [...arr]
        })
    }

    addStepToList = (e) => {
        console.log(`addingStep`)
        let arr = [...this.state.preparationList]
        arr.push(this.state.step)
        this.setState({
            preparationList: [...arr]
        })
    }

    handleChange = (e) => {
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    preparationList = () => {
        let preparationDisp = []
        this.state.preparationList.map((step, ind) => {
            preparationDisp.push(<p key={ind} >{step}</p>)
        })
        return preparationDisp
    }

    ingredientList = () => {
        let ingredientDisp = []
        this.state.ingredientList.map((ingredient, ind) => {
            ingredientDisp.push(<p key={ind}>{ingredient.amount} {ingredient.measurement} {ingredient.ingredient}</p>)
        })
        console.log(`ingredientDisp: `, ingredientDisp)
        return ingredientDisp
    }

    preparationCard = () => {
        return (<div className="card col s5 offset-s1 ">
            <div className="card-content">
                {this.preparationList()}
            </div>
        </div>)
    }
    ingredientCard = () => {
        return (<div className="card col s5 ">
            <div className="card-content">
                {this.ingredientList()}
            </div>
        </div>)
    }

    addStep = () => {
        return (<div>
            <form className=" col s6">
                <div className="row">
                    <h5 className="col s12 additional-top-margin">Enter preparation step:</h5>
                </div>
                <div className="row">
                    <div className="input-field col s11 ">
                        <textarea type="text" name="step" id="step" className="materialize-textarea remove-bottom-padding-and-margin" placeholder="Step 1" onChange={this.handleChange} />

                    </div>
                    <div className="input-field col s1">
                        <a className="btn-floating light-blue darken-4" onClick={this.addStepToList}><i className="material-icons" >add</i></a>
                    </div>
                </div>
            </form>
        </div>)
    }

    enterAnIngredient = () => {
        return (<div>
            <form className=" col s6">
                <div className="row">
                    <h5 className="col s12 additional-top-margin">Enter an ingredient:</h5>
                </div>
                <div className="row">
                    <div className="input-field col s2 ">
                        <Input name="amount" type="text" label="Amount" placeholder="1" onChange={this.handleChange}></Input>
                    </div>
                    <div className="input-field col s4">
                        <Input
                            name="measurement"
                            type='select'
                            label="Measurement Type"
                            defaultValue="Cup"
                            onChange={this.handleChange}>
                            <option value="cup">Cup</option>
                            <option value="teaspoon">Teaspoon</option>
                            <option value="tablespoon">Tablespoon</option>
                        </Input>
                    </div>
                    <div className="input-field col s4">
                        <Input name="ingredient" type="text" label="Ingredient" placeholder="Ingredient" onChange={this.handleChange}></Input>
                        {/*<input placeholder="Enter amount" id="amount" type="text" className="validate">
                        </input>
                        <label for="amount">Amount</label>*/}
                    </div>
                    <div className="input-field col s1">
                        <a className="btn-floating light-blue darken-4" onClick={this.addIngredient}><i className="material-icons">add</i></a>
                    </div>
                </div>
            </form>
        </div>)
    }

    render() {
        return (
            <div>
                {/*<div className="row"><MainContent /></div>*/}
                <div className="row container">
                    <div className="input-field col s4">
                        <Input name="author" type="text" label="Recipe Author" placeholder="Author" onChange={this.handleChange}></Input>
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

                    <a className="waves-effect waves-light btn light-blue darken-4">Save Recipe</a>
                </div>
            </div>
        )
    }
}

export default AddRecipe;
