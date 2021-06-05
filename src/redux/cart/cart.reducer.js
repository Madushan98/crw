import CartActionTypes from './cart-types'
import { addCartItem, removeItem } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};



const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload),

            }
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id),
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            }
        default:
            return state;
    }

}

export default cartReducer;


