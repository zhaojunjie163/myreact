import React, {Component} from 'react';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    render() {
        return <form onSubmit={this.onSubmit} className="App">
            <input placeholder='name' ref={inputName => this.inputName = inputName}/>
            <input placeholder='price' ref={inputPrice => this.inputPrice = inputPrice}/>
            <button>Add</button>
            <hr/>
        </form>;
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.inputName.value, this.inputPrice.value);

        this.inputPrice.value='';
        this.inputName.value='';
    }
}

export default AddProduct;
