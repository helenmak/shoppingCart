import React from 'react';

import Product from 'app/components/Product';
import * as style from './style.scss';

const products = {
    a: {id: 'a', name: 'Orange', price: '25', img: require('./img/orange.png')},
    b: {id: 'b', name: 'Raspberry', price: '70', img: require('./img/raspberry.png')},
    c: {id: 'c', name: 'Cherry', price: '50', img: require('./img/cherry.png')},
    //d: {id: 'd', name: 'Cherry', price: '50', img: require('./img/cherry.png')} //can add more items
}

class Products extends React.Component {
    constructor() {
        super();
    }

    renderProducts(){
        let arr = [];
        let ids = Object.keys(products);
        for(let i=0; i<ids.length; i++){
            arr.push(<Product key = {i+name}
                              name = {products[ids[i]].name}
                              price = {products[ids[i]].price}
                              id = {products[ids[i]].id}
                              actions = {this.props.actions}
                              removeFromCart = {this.props.removeFromCart}
                              src = {products[ids[i]].img}
            />)
        }
        return arr;
    }

    render(){
        return(
            <div className = {style.productsWrapper}>
                <h4>Products</h4>
                <div className = {style.products}>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

export default Products;