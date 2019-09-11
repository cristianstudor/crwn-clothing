import { all, call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';

import { getUserCartFromFirebase, changeUserCartInFirebase } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';
import { UserActionTypes } from '../../redux/user/user.types';
import { CartActionTypes } from '../../redux/cart/cart.types';
import { 
  clearCart,
  fetchCartItemsSucces, 
  fetchCartItemsFailure 
} from './cart.actions';

export function* clearUserCartOnSignOut() {
  yield put(clearCart())
};

export function* fetchUserCartOnSignIn() {
  try {
    const userAuth = yield select(selectCurrentUser);
    const userCartFromFirebase = yield call(getUserCartFromFirebase, userAuth);

    yield put(fetchCartItemsSucces(userCartFromFirebase))
  } catch(error) {
    yield put(fetchCartItemsFailure(error));
  }
};

function* updateUserCartInFirebase() {
  try {
    const userAuth = yield select(selectCurrentUser);

    if(userAuth) {
      const userCartFromReducer = yield select(selectCartItems); 
      yield call(changeUserCartInFirebase, userAuth, userCartFromReducer); 
    };
  } catch(error) {
    console.log(error);
  }
};

export function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearUserCartOnSignOut)
};

export function* onSignInSucces() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchUserCartOnSignIn)
};

export function* onCartChange() {
  yield takeEvery(
    [
      CartActionTypes.ADD_ITEM, 
      CartActionTypes.REMOVE_ITEM, 
      CartActionTypes.CLEAR_ITEM
    ], 
    updateUserCartInFirebase
  );
};

export function* cartSagas() {
  yield all([
    call(onSignOutSucces),
    call(onSignInSucces),
    call(onCartChange)
  ]);
};