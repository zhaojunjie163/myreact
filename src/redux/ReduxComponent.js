import React, {Component} from 'react';

import {connect} from 'react-redux';
import updateUserAction from "./actions/UserAction";

class ReduxComponent extends Component {

    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(event){
        // console.log('here')
       this.props.onUpdateUser(event.target.value) ;
    }

    render() {
        return <div className="App">
            <input onChange={this.onUpdateUser} defaultValue='name'></input>
            <h1>{this.props.user}</h1>
        </div>;
    }

}

const mapSateToProps = state => ({
    products : state.products,
    user: state.user
});

const mapDispatchToProps = {
    onUpdateUser : updateUserAction
}


export default connect(mapSateToProps,mapDispatchToProps)(ReduxComponent);
