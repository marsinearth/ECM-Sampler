const album = (state = {}, action) => {
    switch(action.type){
    case 'ADD_ALBUM':
        return {
	        id: action.id,
	        text: action.text,
	        playing: false
        }
    case 'SHOW_TITLE':
        if(state.catl !== action.catl){
	        return state;
        }
        return Object.assign({}, state, {
	        current: state.current === 'false' ? 'true' : 'false'
        });
    default:
        return state;
    }
}

const albums = (state = [], action) => {
    switch(action.type){
    case 'SHOW_TITLE':
        return state.map(a =>
	                     album(a, action)
                        );
        /*case 'ADD_ALBUM':
          return [
	      ...state,
	      album(undefined, action)
          ];
          case 'ALBUM_GENRE':
          return state.map(t =>
	      album(t, action)
          );*/
    default:
        return state;
    }
}

export default albums;
