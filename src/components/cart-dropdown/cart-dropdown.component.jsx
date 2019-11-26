import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const Cart = () => {
    const cartItems = useSelector((state) => selectCartItems(state));
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