import { combineReducers } from "redux";
import productListReducer from "./product/product.reducer";

const rootReducer = combineReducers({
    product: productListReducer
});

export default rootReducer

