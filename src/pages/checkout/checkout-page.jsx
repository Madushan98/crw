import React from "react"
import './checkout-page.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">

        <div className="checkout-header">
            <div class="header-block"><span className="">Product</span></div>
            <div class="header-block"><span className="">Description</span></div>
            <div class="header-block"><span className="">Quantity</span></div>
            <div class="header-block"><span className="">Price</span></div>
            <div class="header-block"><span className="">Remove</span></div>

        </div>


        {
            cartItems.length ? (
                cartItems.map(cartItem => (

                    <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>



                ))
            ) : <span className='empty-message'>Your Cart Is Empty</span>

        }


        <div className="total">
            <span className=''>Total : ${total}</span></div>


    </div>
)



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})




export default connect(mapStateToProps)(CheckoutPage);