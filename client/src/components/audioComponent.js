import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shuffle from 'shuffle-array';
import './player.css';
//import AudioController from './audioController';

//props나 state등은 나중에 reducer로 빼자.
const AudioComponent = ({ songs, musicPlay }) => {
    const coverClass = classNames({
              'player-cover': true,
              'no-height': !!!this.state.active.cover
          }),
          
          playPauseClass = classNames({
              'fa': true,
              'fa-play': !this.state.playing,
              'fa-pause': this.state.playing
          }),
          
          volumeClass = classNames({
              'fa': true,
              'fa-volume-up': !this.state.mute,
              'fa-volume-off': this.state.mute
          }),
          
          randomClass = classNames({
              'player-btn small random': true,
              'active': this.state.random
          }),
    
          repeatClass = classNames({
              'player-btn small repeat': true,
              'active': this.state.repeat
          }),
          
          song = this.state.active;
    
    /*className={coverClass}*/
    return (
        <div className="player-container">
            <div style={{ backgroundImage:'url(' +  (song.cover || '') + ')'}}></div>
            <div className="artist-info">
	            <h2 className="artist-name">{song.artist.name}</h2>
	            <h3 className="artist-song-name">{song.artist.song}</h3>
            </div>
            
            <div className="player-progress-container" onClick={this.setProgress}>
	            <span className="player-progress-value" style={{width: this.state.progress + '%'}}></span>
            </div>
            
            <div className="player-options">
	            <div className="player-buttons player-controls">
                    <button
                        onClick={this.toggle}
                        className="player-btn big"
                        title="Play/Pause"
                    >
                        <i className={playPauseClass}></i>
                    </button>
                    <button
                        onClick={this.previous}
                        className="player-btn medium"
                        title="Previous Song"
                    >
                        <i className="fa fa-backward"></i>
                    </button>
                    <button
                        onClick={this.next}
                        className="player-btn medium"
                        title="Next Song"
                    >
                        <i className="fa fa-forward"></i>
                    </button>
	            </div>
                
	            <div className="player-buttons">
                    <button
                        className="player-btn small volume"
                        onClick={this.toggleMute}
                        title="Mute/Unmute"
                    >
                        <i className={volumeClass}></i>
                    </button>
                    <button
                        className={repeatClass}
                        onClick={this.repeat}
                        title="Repeat"
                    >
                        <i className="fa fa-repeat"></i>
                    </button>
                    <button
                        className={randomClass}
                        onClick={this.randomize}
                        title="Shuffle"
                    >
                        <i className="fa fa-random"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AudioComponent;
