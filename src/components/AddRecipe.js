import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'react-materialize'
import MainContent from './MainContent'


class AddRecipe extends Component {
    preparationCard = () => {
        return (<div className="card col s5 offset-s1 ">
            <div className="card-content">
                <p>This is where the preparation steps will be listed:</p>
            </div>
        </div>)
    }
    ingredientCard = () => {
        return (<div className="card col s5">
            <div className="card-content">
                <p>This is where the ingredient list will be listed</p>
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
                        <Input name="step" type="text" label="Enter a step" placeholder="Step 1"></Input>

                    </div>
                    <div className="input-field col s1">
                        <a className="btn-floating light-blue darken-4"><i className="material-icons">add</i></a>
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
                        <Input name="amount" type="text" label="Amount" placeholder="1"></Input>
                    </div>
                    <div className="input-field col s4">
                        <Input
                            name="measurement"
                            type='select'
                            label="Measurement Type"
                            defaultValue="Cup">
                            <option value="cup">Cup</option>
                            <option value="teaspoon">Teaspoon</option>
                            <option value="tablespoon">Tablespoon</option>
                        </Input>
                    </div>
                    <div className="input-field col s4">
                        <Input name="ingredient" type="text" label="Ingredient" placeholder="Ingredient"></Input>
                        {/*<input placeholder="Enter amount" id="amount" type="text" className="validate">
                        </input>
                        <label for="amount">Amount</label>*/}
                    </div>
                    <div className="input-field col s1">
                        <a className="btn-floating light-blue darken-4"><i className="material-icons">add</i></a>
                    </div>
                </div>
            </form>
        </div>)
    }

    render() {
        return (
            <div>
                {/*<div className="row"><MainContent /></div>*/}
                <div className="row container ">

                    {this.enterAnIngredient()}
                    {this.addStep()}
                </div>
                <div className="row container">
                    {this.ingredientCard()}
                    {this.preparationCard()}
                </div>
            </div>
        )
    }
}

export default AddRecipe;
