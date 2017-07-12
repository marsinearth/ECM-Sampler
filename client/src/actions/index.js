let nextTrackId = 0, nextAlbumId = 0;

export const addTrack = (text) => {
  return {
    type: 'ADD_TRACK',
    id: nextTrackId++,
    text
  }
}

export const addAlbum = (text) => {
  return {
    type: 'ADD_ALBUM',
    id: nextAlbumId++,
    text
  }
}

export const showTitle = (catl) => {
  return {
    type: 'SHOW_TITLE',
    catl
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const togglePlay = (id) => {
  return {
   type: 'TOGGLE_PLAY',
    id
  }
}

