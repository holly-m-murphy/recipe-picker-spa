import React from 'react';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducers'
import { loadRecipes } from './actions/actions'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
//import thunk from 'redux-thunk'

const middleware = [thunk],
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, /* preloadedState, */
    //applyMiddleware(thunk)
    composeEnhancers(applyMiddleware(...middleware))
);

// call action to load all recipes into reducer
console.log(`store: `, store)
store.dispatch(loadRecipes())

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
render();
store.subscribe(render)

//registerServiceWorker();


