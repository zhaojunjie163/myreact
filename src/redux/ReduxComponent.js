import React, {Component} from 'react';

import {combineReducers, createStore} from 'redux';

function productReducer(state = [], action) {
    return state;
}

function userReducer(state = '', action) {
    switch (action.type) {
        case 'update' :
            return action.payload.user;
        default:
            return state;
    }
}

const updateUserAction = {
    type: 'update',
    payload: {
        user: 'junjie'
    }
}

const allProducers = combineReducers({
    products: productReducer,
    user: userReducer
})


const store = createStore(
    allProducers,
    {
        products: [{name: 'iphone'}],
        user: 'Mic'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(updateUserAction);
console.log(store.getState());


class ReduxComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'initial name',
            title: 'initial title'

        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return <div className="App">


        </div>;
    }


    onClick() {
        this.setState({
            name: 'new name',
            title: 'new title'
        });
    }
}

export default ReduxComponent;
