import productActionTypes from "./product.types";

const INITIAL_STATE = {
    allProducts: [],
    error: ''
}

const productListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productActionTypes.PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                allProducts: [],
            }

        case productActionTypes.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                allProducts: action.payload
            }
            
        case productActionTypes.PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    };
}

export default productListReducer;