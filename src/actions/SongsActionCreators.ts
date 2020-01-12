import {PopularSongsObject} from '../types/popular.data';
import {
  GET_POPULAR_SONGS,
  GET_RELATED_SONGS,
  GET_SONGS_BY_SEARCH,
  GET_ERRORS,
  GET_PLAYING_SONGS,
} from '../types/action.types';
import {AppActions} from '.';
import {RelatedSongsObject} from '../types/related.data';
import {SearchSongsObject, Item} from '../types/search.data';
import {AxiosResponse} from 'axios';

export const getPopularSongsActionCreator = (
  data: PopularSongsObject | null,
): AppActions => {
  return {
    type: GET_POPULAR_SONGS,
    payload: data,
  };
};

export const getRelatedSongsActionCreator = (
  data: RelatedSongsObject,
): AppActions => {
  return {
    type: GET_RELATED_SONGS,
    payload: data,
  };
};

export const getSongsBySearchActionCreator = (
  data: SearchSongsObject,
): AppActions => {
  return {
    type: GET_SONGS_BY_SEARCH,
    payload: data,
  };
};

export const getErrorsActionCreator = (data: AxiosResponse): AppActions => {
  return {
    type: GET_ERRORS,
    payload: data,
  };
};

export const getPlayingActionCreator = (data: Item[]): AppActions => {
  return {
    type: GET_PLAYING_SONGS,
    payload: data,
  };
};
