import React from 'react';
import { connect } from 'react-redux';
import AudioComponent from './audioComponent';

const songs = album => album.tracklist.map((track, i, rray) => {
    const mvmtTitle = track.movement.length > 0
          ? `${track.movement} - ${track.title}`
          : track.title;
    
    return {
        url: track.url,
        cover: album.album_jacket,
        artist: {
            name: track.artists,
            song: mvmtTitle
        }   
    };
});

const mapToState = state => ({
    songs: songs(state.albums[0]),
    musicPlay: state.musicPlay
});

const mergeProps = (state, dispatchToProps, ownProps) => {
    const { dispatch } = dispatchProps;

    return {
        ...state,
    };
};

export default connect(mapToState, null, mergeProps)(AudioComponent);
