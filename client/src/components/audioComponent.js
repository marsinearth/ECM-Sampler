import React from 'react';
import PropTypes from 'prop-types';
import CLAudioPlayer from 'react-cl-audio-player';
import './player.css';

//import AudioController from './audioController';

const AudioComponent = ({ album }) => {
  let tracklist = album.tracklist, songs = [];
  for(let key in tracklist) {
    let mvmtTitle = tracklist[key].mvmt.length > 0 ? tracklist[key].mvmt + ' - ' + tracklist[key].title : tracklist[key].title;
    songs.push({
      url: tracklist[key].url,
      cover: album.album_jacket,
      artist: {
	name: tracklist[key].artists,
	song: mvmtTitle
      }
    });
  }
  return (
    <div>
      <CLAudioPlayer songs={songs} />
    </div>
  );
}

AudioComponent.propTypes = {
  tracklist: PropTypes.object
}

export default AudioComponent;
