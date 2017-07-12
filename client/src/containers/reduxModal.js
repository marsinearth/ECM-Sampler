import { connect } from 'react-redux';
import { showTitle } from '../actions';
import RReduxModal from '../components/reduxModalComp';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemClick: () => {
      dispatch(showTitle(ownProps.albumInfo.catl));
      ownProps.removeModal();
    }
  }
}

const reduxModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(RReduxModal);

export default reduxModal;
