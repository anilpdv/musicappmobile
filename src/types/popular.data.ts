import { Item } from "./search.data";
import { Id } from './related.data';

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

export interface Standard {
    url: string;
    width: number;
    height: number;
}

export interface Maxres {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
    maxres: Maxres;
}

export interface Localized {
    title: string;
    description: string;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage: string;
}

export interface PopularItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
}

export interface PopularSongsObject {
    kind: string;
    etag: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    items: PopularItem[];
}


