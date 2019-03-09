import React, {Component} from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddProduct from "./AddProduct";

const products = [
    {
        name: 'iPad',
        price : '200'
    },
    {
        name:'iphone',
        price:'800'
    }
];

localStorage.setItem('products', JSON.stringify(products));

class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        };
        this.onClick = this.onClick.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentWillMount() {
        const products = this.getProducts();

        this.setState({products});
    }

    render() {
        return <div className="App">
            <div>Product Manager</div>
            <AddProduct onAdd = {this.onAdd}/>
            {this.state.products.map(product => {
                return (
                    <ProductItem key={product.name}
                                 {...product}
                        onClick ={this.onClick}
                                 onSubmit = {this.onSubmit}
                    />
                );
            })}
        </div>;
    }


    onClick(name) {
        console.log(name)
         const products = this.getProducts();

        const filteredProductItems = products.filter(product => {
            return product.name !== name;
        });

        this.setState({products: filteredProductItems});
    }

    getProducts() {
        return this.state.products;
    }

    onAdd(name,price){
        console.log(name,price)

        const products = this.getProducts();

        products.push({
            name,
            price
        });

        this.setState({products});
    }

    onSubmit(name, price, originName){

        console.log('onSubmit')
       const products = this.getProducts();

       products.map(product => {
           if (product.name === originName) {
               product.name = name;
               product.price = price;
           }
           return product;
       })

        this.setState({products});
    }
}

export default Crud;
