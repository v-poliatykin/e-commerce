import React from 'react';
import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const Cart = () => {
    const cartItems = useSelector(({cart}) => cart.cartItems);
    return (
        <div className='cart-dropdown'>
        <div className="cart-items">
            {cartItems.map(item => (
                <CartItem item={item} key={item.id}/>
            ))}
        </div>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
    </div>
    )
}

export default Cart;