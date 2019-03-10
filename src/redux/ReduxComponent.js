import React, {Component} from 'react';

import {combineReducers, createStore} from 'redux';

function productReducer(state = [], action) {
    return state;
}

function userReducer(state ='', action) {
    return state;
}

const allProducers = combineReducers({
    products: productReducer,
    users: userReducer
})


const store = createStore(allProducers, {
    products: [{name: 'iphone'}],
    users: 'Mic'
});


console.log(store.getState());



class ReduxComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'initial name',
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
