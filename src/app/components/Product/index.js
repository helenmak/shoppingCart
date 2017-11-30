import React from 'react';
import {connect} from 'react-redux';

import * as style from './style.scss';

class Product extends React.Component {
    constructor(props){
        super();
        this.state = {
            inCart: false,
            id: props.id
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {addToCart, removeFromCart, deleteQuantity, changeQuantity} = this.props.actions;
        if (this.state.inCart) {
            removeFromCart(this.props.id)
            deleteQuantity(this.props.id)
        } else {
            addToCart({[this.props.id]: {id: this.props.id, name: this.props.name, price: this.props.price}});
            changeQuantity(1, this.props.id)
        }

        this.setState({inCart: !this.state.inCart})

    }

    componentWillReceiveProps(nextProps){
        if(this.props.id == nextProps.removeFromCart){
            this.setState({inCart: false})
        }
    }


    render(){
        return(
            <div className = {style.product} id = {this.props.id}>
                <div className = {style.image}><img src={this.props.src} alt={this.props.name} /></div>
                <div className = {style.name}>{this.props.name}</div>
                <div className = {style.price}>{this.props.price} USD</div>
                <button className = {style.productBt} onClick = {this.handleClick}>{this.state.inCart ? 'Remove from cart' : 'Add to cart' }</button>
            </div>
        )
    }
}


export default connect()(Product);