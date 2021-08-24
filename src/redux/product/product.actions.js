export const listProducts = (data) => ({
    type: 'PRODUCT_LIST_SUCCESS',
    payload: data
});

export const listProductsError = (error) => ({
    type: 'PRODUCT_LIST_FAIL',
    payload: error
});

export const listProductsRequest = () => ({
    type: 'PRODUCT_LIST_REQUEST'
});

/*
export const listProducts = () => async (dispatch) => {
    try {
        const response = await fetch('api/products');
        const products = await response.json()

        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: products
        })
      }
      catch(err) {
        dispatch({
            type: 'PRODUCT_LIST_FAIL',
            payload: err
        })
      }
}
*/