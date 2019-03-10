import React, {Component} from 'react';

import {createStore} from 'redux';

function reducer(state, action) {
    if(action.type === 'change'){
        return action.payload.newState;
    }else if(action.type === 'haha'){
        return 'haha'
    }

    return 'state';
}

const store = createStore(reducer);


const action = {
    type : 'change',
    payload: {
        newState: 'New State'
    }
}

const action2 = {
    type : 'haha',
    payload: {
        newState: 'HAHA'
    }
}

console.log(store.getState());

store.dispatch(action);


console.log(store.getState());

store.dispatch(action2);


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
