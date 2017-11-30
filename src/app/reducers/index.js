import {combineReducers} from 'redux';

import cart from './cart';
import quantity from './quantity';

const reducers = combineReducers({
    cart,
    quantity
});

export default reducers;
