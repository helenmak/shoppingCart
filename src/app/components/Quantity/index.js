import React from 'react';
import {connect} from 'react-redux';

import * as style from './style.scss';

class Quantity extends React.Component{
    constructor(props){
        super();

        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    }

    handleMinus(){
        let {changeQuantity} = this.props.actions;
        this.props.quantity[this.props.product.id] === 0
           ?
           changeQuantity(this.props.quantity[this.props.product.id], this.props.product.id)
           :
           changeQuantity(this.props.quantity[this.props.product.id] - 1, this.props.product.id)
    }

    handlePlus(){
        let {changeQuantity} = this.props.actions;
        changeQuantity(this.props.quantity[this.props.product.id]+1, this.props.product.id)
    }

    render(){
        return(
            <div className = {style.quantityWrapper}>
                <button className = {style.quantityBtLeft} onClick = {this.handleMinus} disabled = {!this.props.quantity[this.props.product.id]}>
                -</button>
                <div className = {style.quantityValue}>{this.props.quantity[this.props.product.id]}</div>
                <button className = {style.quantityBtRight} onClick = {this.handlePlus} >+</button>
            </div>
        )
    }
}


export default connect()(Quantity);