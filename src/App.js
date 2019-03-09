import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        const title = 'This is first line';
        const anotherTitle = 'Another title';
        const list = [
            'Item 1',
            'Item 2',
            'Item 3'
        ];
        return <div className="App">
            <h1>
                {false ? title : anotherTitle}

                {list.map(item => {
                    return (
                        <div key={item} onClick={this.onClick}>{item}</div>
                    );
                })}
            </h1>
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange}></input>
            </form>

        </div>;
    }

    onClick() {
        alert('clicked');
    }

    onChange(event) {
        console.log(event.target.value)
    }

    onSubmit(event) {
        event.preventDefault();// prevent page from refreshing
        console.log('submitted!');
    }
}

export default App;
