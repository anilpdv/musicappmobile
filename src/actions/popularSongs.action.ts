import { Dispatch } from "redux";
import axios, { AxiosResponse } from 'axios'
import { baseurl, popularEndpoint, relatedEndPoint, searchEndPoint } from '../env.variables/env';
import { getPopularSongsActionCreator, getErrorsActionCreator, getRelatedSongsActionCreator, getSongsBySearchActionCreator, getPlayingActionCreator } from './SongsActionCreators';
import { Item, } from "../types/related.data";
import { RelatedSongsObject } from "../types/related.data";



export const getPopularSongs = () => async (dispatch: Dispatch) => {
    try {
        const url = baseurl + popularEndpoint;
        const resp: AxiosResponse = await axios.get(url)
        dispatch(getPopularSongsActionCreator(resp.data))

    } catch (err) {
        dispatch(getErrorsActionCreator(err))
    }
}

export const getRelatedSongs = (id: string) => async (dispatch: Dispatch) => {
    try {
        const url = baseurl + relatedEndPoint + '/' + id;
        const resp: AxiosResponse = await axios.get(url)
        dispatch(getRelatedSongsActionCreator(resp.data))
    } catch (err) {
        dispatch(getErrorsActionCreator(err))
    }
}

export const getSongsBySearch = (query: string) => async (dispatch: Dispatch) => {
    try {
        const url = baseurl + searchEndPoint + '/' + query;
        const resp: AxiosResponse = await axios.get(url)
        dispatch(getSongsBySearchActionCreator(resp.data))
        dispatch(getPopularSongsActionCreator(null))
    } catch (err) {
        dispatch(getErrorsActionCreator(err))
    }
}

export const getPlayingSongs = (playingSong: Item) => async (dispatch: Dispatch) => {
    try {
        const url = baseurl + relatedEndPoint + '/' + playingSong.id.videoId;
        const resp: AxiosResponse = await axios.get(url)
        const relatesongs = <RelatedSongsObject>resp.data
        relatesongs.items.unshift(playingSong)
        const playingsongs = relatesongs.items;
        console.log(playingSong)
        dispatch(getPlayingActionCreator(playingsongs))
    } catch (err) {
        dispatch(getErrorsActionCreator(err))
    }
}
