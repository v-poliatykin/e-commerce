import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selectors';


const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShop => {
          dispatch(setCurrentUser({
            id: snapShop.id,
            ...snapShop.data(),
          }));
        });
      };
      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch])

  const currentUser = useSelector(state => selectCurrentUser(state));

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
      </Switch>
    </div>
  )
};

export default App;
