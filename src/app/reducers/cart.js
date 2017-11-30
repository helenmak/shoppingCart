const initialState = {
    productsInCart: {},
    removeFromCart: []
};

const reducer = (state = initialState, action)=>{
    let _state = {...state}, _action = {...action};

    switch(_action.type){

        case 'ADD_TO_CART':
            _state = {
                ...state,
                productsInCart: Object.assign(_state.productsInCart, _action.payload), //productsInCart = obj
                removeFromCart: Object.assign(_state.removeFromCart.slice(0,0), '')
            };
            break;

        case 'REMOVE_FROM_CART':
            delete _state.productsInCart[_action.payload];
            _state = {
                ...state,
                removeFromCart: Object.assign(_state.removeFromCart.slice(0,0), _action.payload)
            };
            break;

        default:
            return state;
    }

    return _state;
};

export default reducer;
