import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer, getProductDetailsReducer} from './reducers/product-redux';
import {cartReducer} from "./reducers/cartReducer.js";

const reducer= combineReducers({
    getProducts: getProductsReducer,
    getProductsDetails: getProductDetailsReducer,
    cart: cartReducer 
});

const middleware = [thunk];

const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;