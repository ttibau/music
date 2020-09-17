import { createStore } from 'redux'

const INITIAL_STATE = {
    sound: null,
    currentPlaylist: []
}
// Reducer
function Music(state=INITIAL_STATE, action : any) {
    switch(action.type){
        case 'PLAY_SOUND': 
            return {...state, sound: action.sound }
        case 'SET_CURRENT_PLAYLIST':
            return {...state, currentPlaylist: action.playlist }
        default:
            return state
    }
}

const store = createStore(Music)

export default store