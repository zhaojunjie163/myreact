import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title: 'my name'
        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return <div className="App">
            <h1>{this.state.title}</h1>
            <div onClick={this.onClick}>Click here!</div>
        </div>;
    }


    onClick() {
       this.setState({
           title: 'new title'
       });
    }
}

export default App;
