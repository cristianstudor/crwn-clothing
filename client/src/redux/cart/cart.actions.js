import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const fetchCartItemsSucces = cartItems => ({
  type: CartActionTypes.FETCH_CART_ITEMS_SUCCESS,
  payload: cartItems
});

export const fetchCartItemsFailure = error => ({
  type: CartActionTypes.FETCH_CART_ITEMS_SUCCESS,
  payload: error
});