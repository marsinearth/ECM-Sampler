import React from 'react';
import PropTypes from 'prop-types';


const AudioController = ({ mvmt, url }) => (
  <div>
    { mvmt.length > 0 ? <span>{mvmt}</span> : '' }
    <Sound url={url} playStatus={Sound.status.STOPPED} />
  </div>
)

AudioController.propTypes = {
  mvmt: PropTypes.string,
  url: PropTypes.string,
}

export default AudioController;
