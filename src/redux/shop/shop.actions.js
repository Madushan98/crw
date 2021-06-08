import ShopActionTypes from "./shop.type";



export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap

});