export const listProducts = (data) => ({
    type: 'PRODUCT_LIST_SUCCESS',
    payload: data
});

export const listProductsError = (error) => ({
    type: 'PRODUCT_LIST_FAIL',
    payload: error
});