import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumList = ({ albums, onAlbumClick }) => {
  return (
  <ul>
  {albums.map(album =>   
    <li key={`li_${album.catl}`} style={{ listStyleType: "none" }}>
    <Album
      key={album.catl}
      title={album.title}
      img_src={album.album_jacket}
      current={album.current}
      onClick={() => onAlbumClick(album)}
    />
    </li>
  )}
  </ul>
)
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    img_src: PropTypes.string,
    title: PropTypes.string,
    current: PropTypes.string
  })),
  onAlbumClick: PropTypes.func
}

export default AlbumList;
