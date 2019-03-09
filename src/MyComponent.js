import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onclick: PropTypes.func
}

const defaultProps = {
    name: 'This is default name'
}

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
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;