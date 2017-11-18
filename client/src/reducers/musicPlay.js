const initialState = {
    active: null,
    songs: null,
    current: 0,
    progress: 0,
    shuffle: false,
    playing: false,
    repeat: 'OFF',
    mute: false
}

const musicPlay = (state = initialState, action) => {
    switch(action.type){
    case 'UPDATE_PROGRESS':
        return {	        
	        ...state,
            progress: action.progress
        };
    case 'TOGGLE_PLAY':
	    return {
            ...state,
            playing: !state.playing  
        };
    case 'TRACK_CHANGE':
        return {
            ...state,
            current: 0
        };
    case 'REPEAT_MODE':
        return {
            ...state,
            repeat: action.mode
        };
    case 'SHUFFLE':
	    return {
            ...state,
            song: action.songList
        };
    case 'TOGGLE_MUTE':
        return {
            ...state,
            mute: !state.mute
        };
    default:
        return state;
    }
}

export default musicPlay;
