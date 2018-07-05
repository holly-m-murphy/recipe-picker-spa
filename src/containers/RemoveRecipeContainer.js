import { connect } from 'react-redux';
import RemoveRecipe from './../components/RemoveRecipe';
// import { loadRecipes } from './../actions/actions';

const mapStateToProps = (state) => {
    console.log(`what is state in container: `, state)
    return {
        recipes: state.recipes
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadRecipes: (recipes) => {
//             dispatch(loadRecipes(recipes));
//         }
//     }
// }

export default connect(mapStateToProps, null)(RemoveRecipe)