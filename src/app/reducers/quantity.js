const initialState = {
    quantity: {}
};

const reducer = (state = initialState, action)=>{
    let _state = {...state}, _action = {...action};

    switch(_action.type){

        case 'CHANGE_QUANTITY':
            _state = {
                ...state,
                quantity: Object.assign({}, _state.quantity, _action.payload)
            };
            break;

        case 'DELETE_QUANTITY':
            delete _state.quantity[_action.payload];
            break;

        default:
            return state;
    }

    return _state;
};

export default reducer;
