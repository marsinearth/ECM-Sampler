import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as modalReducer } from 'react-redux-modal';
import albums from './albums';
import visibilityFilter from './visibilityFilter';
import * as asyncInitialState from 'redux-async-initial-state';

//reformat album states to put sample_track infos into array due to change the data format of redis.io
function albumReformatter(albums) {
  const newAlbums = [];
  for (let i = 0; i < albums.length; i++) { 
    let newAlbum = albums[i];
    newAlbum.tracklist = {};
    for(let j = 0; j < albums[i].sample_tracks; j++) {
      let sTrack = 'sample_track' + String([j]), 
	  sTitle = 'sample_track' + String([j]) + ':title',	
	  sMvmt = 'sample_track' + String([j]) + ':movement',	
	  sArtists = 'sample_track' + String([j]) + ':artists',
	  sComposer = 'sample_track' + String([j]) + ':composer',
	  sURL = 'sample_track' + String([j]) + ':URL';
      newAlbum.tracklist[sTrack] = {
	  title: albums[i][sTitle],
	  artists: albums[i][sArtists],
	  composer: albums[i][sComposer],
	  mvmt: albums[i][sMvmt],
	  url: albums[i][sURL]
      }
      delete newAlbum[sTitle];
      delete newAlbum[sArtists];
      delete newAlbum[sComposer];
      delete newAlbum[sMvmt];
      delete newAlbum[sURL];
    }
    newAlbums.push(newAlbum)
  }
  return newAlbums;
}

const reducer = asyncInitialState.outerReducer(combineReducers({
  albums,
  visibilityFilter,
  modals: modalReducer,
  asyncInitialState: asyncInitialState.innerReducer
}));

const loadStore = (currentState) => {
  return new Promise(resolve => {
    fetch('/load')
      .then(res => res.json())
      .then(albums_fetched => {
	resolve({
	  ...currentState,
	  albums: albumReformatter(albums_fetched)
	})
      });
  });
};

const samplerStore = createStore(
  reducer,
  compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
);

export default samplerStore;
