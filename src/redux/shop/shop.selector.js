import { createSelector } from 'reselect'





const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
)
export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shopData => Object.keys(shopData).map(key => shopData[key])
)



export const selectShopDataForItem = collectionUrlParam => createSelector(
    [selectShopData],
    shopData => shopData[collectionUrlParam]
);
