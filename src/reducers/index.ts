import { combineReducers } from "redux";
import { SongsReducer } from './SongsReducer';
import { songsPlaying } from './SongsPlaying';

export const rootReducer = combineReducers({
    songs: SongsReducer,
    songsplaying: songsPlaying
})

export type RootState = ReturnType<typeof rootReducer>