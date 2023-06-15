import {getProductsreducer} from "./productsreducers";
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata:getProductsreducer
});

export default rootreducers;