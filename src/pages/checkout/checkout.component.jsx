import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './checkout.styles.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => selectCartItems(state));
    const totalPrice = useSelector(state => selectCartTotal(state));

    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => 
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>    
            )}
            <div className="total">
                    <span>TOTAL: ${totalPrice}</span>
                </div>
        </div>
    );
};

export default CheckoutPage;
