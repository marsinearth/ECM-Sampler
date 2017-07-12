import React from 'react';
import PropTypes from 'prop-types';
import AudioComponent from './audioComponent';

const RReduxModal = ({ modals, onRemClick }) => {
  let album = modals.modals[0].options.albumInfo;
  return (
    <div>
      <p>
        {album.artists}
        <span>{album.release}</span>
      </p>
      <section>
        <h4>Track List</h4>
        <AudioComponent album={album} />
      </section>
      <button
        type="button"
        onClick={() => onRemClick()}
      >
        Close
      </button>
    </div>
  )
}

RReduxModal.propTypes = {
  modals: PropTypes.object,
  onRemClick: PropTypes.func
}

export default RReduxModal;
