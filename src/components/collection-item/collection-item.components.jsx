import React from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../../redux/cart/cart.action';
import './collection-item.style.scss'

import CustomButton from '../custom-button/custom-button.component';


const CollectionItem = ({ item, addCartItem }) => {

    // addItems = () => {
    //     console.log(item.name);
    //     addCartItem(item);
    // }

    const { name, price, imageUrl } = item;

    return (
        < div className='collection-item' >
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} >
            </div>


            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton className='custom-button' onClick={() => addCartItem(item)} > Add to Cart </CustomButton>

        </div >


    )



}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);