import React from 'react';
import { useDispatch } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const { name, quantity, price, imageUrl } = cartItem;

    const handleClick = () => {
        dispatch(clearItemFromCart(cartItem));
    };

    const handleIncreaseQuantity = () => {
        dispatch(addItem(cartItem));
    }

    const handleDecreaseQuantity = () => {
        dispatch(removeItem(cartItem));
    }

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={handleDecreaseQuantity}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={handleIncreaseQuantity}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={handleClick}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;