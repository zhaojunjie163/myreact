import React, {Component} from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);

        this.state = {isEdit: false}
        this.onClick = this.onClick.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }


    onClick() {
        this.props.onClick(this.props.name);
    }

    onEditSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.inputName.value, this.inputPrice.value, this.props.name);
        this.setState({isEdit: false});
    }

    onEdit(event) {
        this.setState({isEdit: true});
    }


    render() {
        const {name, price} = this.props;
        return <div className="App">


            {this.state.isEdit ?
                (
                    <form onSubmit={this.onEditSubmit}>
                        <input placeholder='name' ref={inputName => this.inputName = inputName}
                               defaultValue={name}/>
                        <input placeholder='price' ref={inputPrice => this.inputPrice = inputPrice}
                               defaultValue={price}/>
                        <button>save</button>
                    </form>
                )
                :
                (
                    <div>
                        <span>{name}</span>
                        {' | '}
                        <span>{price}</span>
                        {' | '}
                        <button onClick={this.onClick}>Delete</button>
                        <button onClick={this.onEdit}>Edit</button>
                    </div>
                )}


        </div>;
    }
}

export default ProductItem;
