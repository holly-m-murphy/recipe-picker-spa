import React from 'react';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducers'
import { loadRecipes } from './actions/actions'

let store = createStore(reducer)

// call action to load all recipes into reducer
console.log(`store: `, store)
loadRecipes([{ title: "loading", author: "author's name" }])
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
