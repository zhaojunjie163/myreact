import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        const title = 'This is first line';
        const anotherTitle = 'Another title';
        return (
            <div className="App">
                <h1>
                    {false ? title : anotherTitle}
                </h1>
            </div>
        );
    }
}

export default App;
