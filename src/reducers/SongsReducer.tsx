import { AppActions } from '../actions/index';
import { PopularSongsObject } from '../types/popular.data';
import { RelatedSongsObject } from '../types/related.data';
import { SearchSongsObject } from '../types/search.data';
import { GET_POPULAR_SONGS, GET_RELATED_SONGS, GET_SONGS_BY_SEARCH } from '../types/action.types';

interface SongsState {
    popularSongs: PopularSongsObject | null,
    relatedSongs: RelatedSongsObject | null,
    searchSongs: SearchSongsObject | null

}

const initialState: SongsState = {
    popularSongs: null,
    relatedSongs: null,
    searchSongs: null,
}

export function SongsReducer(state = initialState, action: AppActions): SongsState {
    switch (action.type) {
        case GET_POPULAR_SONGS:
            return {
                ...state,
                popularSongs: action.payload
            }
        case GET_RELATED_SONGS:
            return {
                ...state,
                relatedSongs: action.payload
            }
        case GET_SONGS_BY_SEARCH:
            return {
                ...state,
                searchSongs: action.payload
            }
        default:
            return state;
    }

}