import * as actionTypes from 'app/constants/actionTypes';

export function addToCart(product) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    };
}

export function removeFromCart(id) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    };
}

export function changeQuantity(quantity, id){
    return {
        type: actionTypes.CHANGE_QUANTITY,
        payload: {[id]: quantity}
    };
}

export function deleteQuantity(id){
    return {
        type: actionTypes.DELETE_QUANTITY,
        payload: id
    };
}
