export const updateProgress = progress => {
    return {
        type: 'UPDATE_PROGRESS',
        progress
    }
}

export const togglePlay = () => {
    return {
        type: 'TOGGLE_PLAY'
    }
}

export const trackChange = index => {
    return {
        type: 'TRACK_CHANGE',
        index
    }
}

export const shuffle = songList => {
    return {
        type: 'SHUFFLE',
        songList
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const setRepeatMode = mode => {
    return {
        type: 'REPEAT_MODE',
        mode
    }
}

export const toggleMute = () => {
    return {
        type: 'TOGGLE_MUTE',
    }
}

