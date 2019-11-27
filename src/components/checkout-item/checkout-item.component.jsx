import React from 'react';
import { useDispatch } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const { name, quantity, price, imageUrl } = cartItem;

    const handleClick = () => {
        dispatch(clearItemFromCart(cartItem));
    };

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={handleClick}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;
