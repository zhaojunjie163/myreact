import React, {Component} from 'react';

import {connect} from 'react-redux';
import {apiRequest, updateUserAction} from "./actions/UserAction";

class ReduxComponent extends Component {

    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(event){
        // console.log('here')
       this.props.onUpdateUser(event.target.value) ;
    }


    componentDidMount(){
        setTimeout(()=> {
            this.props.onApiRequest();
        },1500) ;

    }

    render() {
        return <div className="App">
            <input onChange={this.onUpdateUser} defaultValue='name'></input>
            <h1>{this.props.randomProps}</h1>
        </div>;
    }

}

const mapSateToProps = (state, props) =>{
    return {
        products : state.products,
        user: state.user,
        randomProps: `${state.user} ${props.randomProp}`
    }
};

const mapDispatchToProps = {
    onUpdateUser : updateUserAction,
    onApiRequest: apiRequest
}


export default connect(mapSateToProps,mapDispatchToProps)(ReduxComponent);
