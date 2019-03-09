import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {

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
            <MyComponent
                name= {this.state.name}
                title= {this.state.title}
                onClick={this.onClick}
            />

            <input value='name'></input>
        </div>;
    }


    onClick() {
        this.setState({
            name: 'new name',
            title: 'new title'
        });
    }
}

export default App;
