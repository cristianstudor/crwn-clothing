import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';

const mapStateToProps = state => ({
  isLoading: !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

//connect(mapStateToProps)(WithSpinner(CollectionPage)) - without compose

export default CollectionPageContainer;