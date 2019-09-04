import { ShopActionTypes } from './shop.types';
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCES,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart()); 
    
//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSucces(collectionsMap)); //works because of redux-thunk
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message))); //works because of redux-thunk
//   }
// }