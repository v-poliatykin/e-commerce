import React from 'react';
import { useDispatch } from 'react-redux';

import './checkout-item.styles.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    console.log(cartItem);
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
};

export default CheckoutItem;
