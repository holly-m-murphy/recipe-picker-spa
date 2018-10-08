import React, { Component } from 'react';

class RecipeDisplay extends Component {

    state = {
        expanded: false
    }

    expandRecipe = (e) => {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded
        })
    }



    // prepSteps = () => {
    //     const steps = []
    //     if (this.props.recipe.preparationList) {
    //         this.props.recipe.preparationList.map((step, ind) => {
    //             steps.push(<li key={ind}>{step}</li>)
    //         })
    //     }

    //     return steps
    // }

    displayListing = (listToMake) => {
        const returnArr = []
        if (this.props.recipe[listToMake]) {
            //filter each of the '~'
            // [...this.props.recipe.preparations].forEach()
            let listElements = this.props.recipe[listToMake],
                parseIndex = listElements.indexOf("~"),
                keyCount = 0


            while (parseIndex > -1) {
                returnArr.push(<li key={keyCount + listToMake}>{listElements.substring(0, parseIndex)}</li>)
                listElements = listElements.substring(parseIndex + 1)
                parseIndex = listElements.indexOf("~")
                keyCount++
            }

            if (!returnArr.length > 0) {
                returnArr.push(<li>{this.props.recipe[listToMake]}</li>)
            }

            return returnArr

        }
    }


    render() {
        return (
            <div className="row">
                <div className="col m9 offset-m1">
                    <div className="card light-blue darken-4">
                        <div className="card-content white-text">
                            <span className="card-title center-align">{this.props.recipe.title}</span>
                            <p className="center-align">{this.props.recipe.author}</p>
                        </div>
                        <div className="card-action white-text">
                            <a href="#" onClick={this.expandRecipe}>Expand recipe...</a>
                            {this.state.expanded === true && (
                                <div>
                                    <h5 >Ingredients: </h5>
                                    {/*{this.props.recipe.ingredients}*/}
                                    <ul>{this.displayListing("ingredients")}</ul>
                                    <div className="padded"></div>
                                    {/*<p>{this.props.recipe.ingredientList ? this.props.recipe.ingredientList : null}</p>*/}
                                    {/*<ul>{this.props.recipe.preparationList ? this.props.recipe.preparationList : null}</ul>*/}
                                    <h5 >Preparation Steps: </h5>
                                    <ul>{this.displayListing("preparations")}</ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RecipeDisplay;
