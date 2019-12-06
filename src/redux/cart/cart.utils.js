export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 },]
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => cartItems.filter(item => item.id !== cartItemToRemove.id);

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const moreThanOne = cartItemToRemove.quantity > 1;

    if (moreThanOne) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )
    };

    return clearItemFromCart(cartItems, cartItemToRemove);
}