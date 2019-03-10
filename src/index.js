import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReduxComponent from "./redux/ReduxComponent";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import productReducer from './redux/reducers/ProductProducers';
import userReducer from './redux/reducers/UserProducers';
import {updateUserAction} from './redux/actions/UserAction'; // if not default


const allProducers = combineReducers({
    products: productReducer,
    user: userReducer
})


const store = createStore(
    allProducers,
    {
        products: [{name: 'iphone'}],
        user: 'Mic-haha'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//This is the entry point of whole application
ReactDOM.render(<Provider store ={store}><ReduxComponent /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
