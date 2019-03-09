import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return <div className="App">
            <form onSubmit={this.onSubmit}>
                <input ref={input => this.input = input}></input>
            </form>

        </div>;
    }

    onSubmit(event) {
        event.preventDefault();// prevent page from refreshing
        console.log(this.input.value);
    }
}

export default App;
