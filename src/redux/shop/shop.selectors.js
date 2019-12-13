import { createSelector } from 'reselect';

const selectShopState = state => state.shop;

export const selectCollections = createSelector(
    [selectShopState],
    shop => shop.collections,
);