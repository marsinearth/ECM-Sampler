import { connect } from 'react-redux';
import { showTitle } from '../actions';
import { modal } from 'react-redux-modal';
import reduxModal from '../containers/reduxModal';
import AlbumList from '../components/AlbumList';

const getVisibleTodos = (albums, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return albums;
    case 'SHOW_CLASSICAL':
      return albums.filter(a => a.genre === "Classical");
    case 'SHOW_JAZZ':
      return albums.filter(a => a.genre === "Jazz");
    default:
      return albums;
  }
}

const mapStateToProps = (state) => {
  return {
    albums: getVisibleTodos(state.albums, state.visibilityFilter)
  };
}

const mapDispatchToProps = (dispatch) => {  
  return {
    onAlbumClick: (album) => {
      dispatch(showTitle(album.catl));
      //add modal with clicked album info
      modal.add(reduxModal, {
	title: album.title,
	size: 'large', // large, medium or small,
	closeOnOutsideClick: true, // (optional) Switch to true if you want to close the modal by clicking outside of it,
	hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
	hideCloseButton: true, // (optional) if you don't wanna show the top right close button
	//.. all what you put in here you will get access in the modal props ;)
	albumInfo: album 
      });
    }    
  };
}

const VisibleAlbumList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);

export default VisibleAlbumList;
