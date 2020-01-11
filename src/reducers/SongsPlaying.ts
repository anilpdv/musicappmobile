import { GET_PLAYING_SONGS } from "../types/action.types";
import { Item } from "../types/related.data";
import { AppActions } from '../actions';

interface PlayingSongsState {
    songsplaying: Item[] | null
}

const initialState: PlayingSongsState = {
    songsplaying: null
}


export const songsPlaying = (state = initialState, action: AppActions): PlayingSongsState => {
    switch (action.type) {
        case GET_PLAYING_SONGS:
            return {
                songsplaying: action.payload
            }
        default:
            return state;
    }
}