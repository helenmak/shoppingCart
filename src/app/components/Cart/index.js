import React from 'react';
import {connect} from 'react-redux';

import Quantity from 'app/components/Quantity';
import * as style from './style.scss';

class Cart extends React.Component {
    constructor(props){
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    addTableData(){
        let props = this.props;
        let tr = [];
        let sum = 0;
        if(props.productsInCart){
            let ids = Object.keys(props.productsInCart);
            ids.forEach((id, i)=> {
                let amount = props.quantity[props.productsInCart[id].id] * props.productsInCart[id].price;
                sum = sum + amount;
                tr.push(
                    <tr key={id + 'tr'}>
                        <td key={id + 'name'}>{props.productsInCart[id].name}</td>
                        <td key={id + 'price'}>{props.productsInCart[id].price} USD</td>
                        <td key={id + 'quantity'}><Quantity product={props.productsInCart[id]}
                                                            quantity={props.quantity}
                                                            actions = {this.props.actions}
                                                            /></td>
                        <td key={id + 'amount'}>{amount} USD</td>
                        <td key={id + 'delete'}>
                            <div>
                                <button className = {style.tableRemoveBt}
                                        id = {props.productsInCart[id].id}
                                        onClick={this.handleDelete}>-</button>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        return {tr, sum};
    }

    handleDelete(e){
        let {removeFromCart, deleteQuantity} = this.props.actions;
        removeFromCart(e.target.id);
        deleteQuantity(e.target.id);
    }


    render(){
        return (
            <div className = {style.tableWrapper}>
                <table>
                    <caption>Cart</caption>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                        {this.addTableData().tr}
                        <tr>
                            <td className = {style.totalAmount} colSpan="5">Total amount: {this.addTableData().sum} USD</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect()(Cart);