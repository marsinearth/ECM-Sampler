import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ onClick, img_src, title, current, tracklist }) => (
  <div
    onClick={onClick}
    style={{
      background: `url(${img_src})`,
      backgroundSize: '250px 250px',
      backgroundRepeat: 'no-repeat',
      width: '300px',
      height: '300px'
    }}
  >
    <p style={{ color:'slateGray', fontWeight:'bold' }}>{ current === 'false' ? '' : title }</p>
  </div>
);

Album.propTypes = {
  onClick: PropTypes.func,
  img_src: PropTypes.string,
  title: PropTypes.string,
  current: PropTypes.string,
  tracklist: PropTypes.array   
}

export default Album;
