import { createSelector } from 'reselect';

const allProducts = state => state.product

export const listOfProducts  = createSelector(
    [allProducts], 
    allStateProducts => allStateProducts.allProducts
);

export const errorProducts  = createSelector(
    [allProducts], 
    allStateProducts => allStateProducts.error
);

