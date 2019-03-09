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


    componentWillMount(){
        console.log('Will Mount');
    }

    componentDidMount(){
        console.log('Did Mount');
    }

    componentWillUpdate(nextProps, nextState){
        // console.log(this.props,this.state, nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.props,this.state, prevProps, prevState);
    }

    constructor(props) {
        super(props);
        this.state ={
            title: 'my name'
        };
    }

    render() {

        const {title, name , onClick} = this.props; // passed from parent

        return <div className="App">
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
