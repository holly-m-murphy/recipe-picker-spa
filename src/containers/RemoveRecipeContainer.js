import { connect } from 'react-redux';
import RemoveRecipe from './../components/RemoveRecipe';
import { removeRecipe } from './../actions/actions';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeRecipe: (recipeTitle) => {
            dispatch(removeRecipe(recipeTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveRecipe)