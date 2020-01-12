import {
  GET_POPULAR_SONGS,
  GET_RELATED_SONGS,
  GET_SONGS_BY_SEARCH,
  GET_ERRORS,
  GET_PLAYING_SONGS,
} from '../types/action.types';
import {PopularSongsObject} from '../types/popular.data';
import {RelatedSongsObject} from '../types/related.data';
import {SearchSongsObject, Item} from '../types/search.data';
import {AxiosResponse} from 'axios';

export interface getPopularSongsAction {
  type: typeof GET_POPULAR_SONGS;
  payload: PopularSongsObject | null;
}

export interface getRelatedSongsAction {
  type: typeof GET_RELATED_SONGS;
  payload: RelatedSongsObject;
}

export interface getSongsBySearch {
  type: typeof GET_SONGS_BY_SEARCH;
  payload: SearchSongsObject;
}

export interface getErrors {
  type: typeof GET_ERRORS;
  payload: AxiosResponse;
}

export interface getPlayingSongs {
  type: typeof GET_PLAYING_SONGS;
  payload: Item[];
}

export type AppActions =
  | getPopularSongsAction
  | getRelatedSongsAction
  | getSongsBySearch
  | getPlayingSongs
  | getErrors;
