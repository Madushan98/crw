export const addCartItem = (cartItems, cartAddItem) => {
    const isINCart = cartItems.find(cartItem => cartItem.id === cartAddItem.id);


    if (isINCart) {

        return cartItems.map(cartItem => cartItem.id === cartAddItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...cartAddItem, quantity: 1 }]

}


export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {

        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }




    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);

}

