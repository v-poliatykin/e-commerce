import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
    const currentUser = useSelector(state => selectCurrentUser(state));
    const hidden = useSelector(state => selectHidden(state));

    return (
        <div className='header'>
        <Link to='/'>
           <div className="logo-container">
            <Logo className='logo'/>
           </div>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
    )
}

export default Header;