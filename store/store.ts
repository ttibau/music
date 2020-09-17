import { createStore } from 'redux'

const INITIAL_STATE = {
    sound: null
}
// Reducer
function Music(state=INITIAL_STATE, action : any) {
    switch(action.type){
        case 'PLAY_SOUND': 
            return {...state, sound: action.sound}
        default:
            return state
    }
}

const store = createStore(Music)

export default store