import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Cart from 'app/components/Cart';
import Products from 'app/containers/Products';
import * as actions from 'app/actions';


class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Cart removeFromCart = {this.props.removeFromCart} productsInCart = {this.props.productsInCart} actions = {this.props.actions} quantity = {this.props.quantity}/>
                <Products removeFromCart = {this.props.removeFromCart} actions = {this.props.actions}/>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        productsInCart: state.cart.productsInCart,
        quantity: state.quantity.quantity,
        removeFromCart: state.cart.removeFromCart
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);