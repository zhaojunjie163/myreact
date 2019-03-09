import React, {Component} from 'react';


class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title: 'my name'
        };
    }

    render() {

        const {title, name , onClick} = this.props; // passed from parent

        return <div className="App">
            <h1>this is a component dropped from another component</h1>
             <h2>
                 Title : {title}
             </h2>
            <h2>
                Name:  {name}
            </h2>
            <div onClick={onClick}>Change parent title</div>
        </div>;
    }

}

export default MyComponent;
