import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const Cart = ({ history }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => selectCartItems(state));

    const handleClick = () => {
        dispatch(toggleCartHidden());
        history.push('/checkout')
    };

    return (
        <div className='cart-dropdown'>
        <div className="cart-items">
            {
            cartItems.length 
            ? cartItems.map(item => (
                <CartItem item={item} key={item.id}/>
            ))

            : <span className='empty-message'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={handleClick}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
    )
}

export default withRouter(Cart);