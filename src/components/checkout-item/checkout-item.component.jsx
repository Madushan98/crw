import React from 'react';

import './checkout-item.component.scss'
import { connect } from 'react-redux'
import { clearCartItem, addCartItem, removeItem } from '../../redux/cart/cart.action'

const CheckoutItem = ({ cartItem, clearCartItem, addCartItem, removeItem }) => (


    <div className="checkout-item">

        <div className="image-container">
            <img src={cartItem.imageUrl} alt='item' />
        </div>

        <div className="name">{cartItem.name}</div>
        <div className="quantity">
            <div className="arrow" onClick={() => {
                removeItem(cartItem);

            }} >&#10094;</div>
            <span>{cartItem.quantity}</span>
            <div className="arrow" onClick={() => {
                addCartItem(cartItem);

            }}>&#10095;</div>
        </div>
        <div className="price">  ${cartItem.price}  </div>
        <div className="remove-button" onClick={() => {
            clearCartItem(cartItem);

        }}>&#10005; </div>
    </div>


)



const mapDispatchToProps = dispatch => ({
    clearCartItem: item => dispatch(clearCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);