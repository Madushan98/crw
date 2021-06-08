import { SHOP_DATA } from './shop.data'
import ShopActionTypes from './shop.type'
const INITIAL_STATE = {
    shopData: SHOP_DATA
}




const shopReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                shopData: action.payload,
            }
        default:
            return state;
    }

}

export default shopReducer;
