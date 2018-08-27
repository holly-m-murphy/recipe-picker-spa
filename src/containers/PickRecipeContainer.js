import { connect } from 'react-redux';
import PickRecipe from './../components/PickRecipe';
import { loadRecipes } from './../actions/actions';

const mapStateToProps = (state) => {
    console.log(`what is state in  pick recipe container: `, state)
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadRecipes: (recipes) => {
            dispatch(loadRecipes(recipes));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickRecipe)