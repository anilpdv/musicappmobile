import React from 'react';
import {transformTitle} from '../../utils/helper';
import './Song.css';
import {useDispatch} from 'react-redux';
import {getPlayingSongs} from '../../actions/popularSongs.action';
import {Item} from '../../types/search.data';

function lrtrim(str: any) {
  if (str == null) return str;
  str = str.replace(/^\s+/g, '');
  return str
    .replace(/\s+$/g, '')
    .split(' ')
    .join('-');
}

type props = {
  song: Item,
};

export default function Song({song}: props) {
  const {author, title} = transformTitle(song.snippet.title);
  const dispatch = useDispatch();

  return (
    <div
      className="flex mb-6 justify-between Song rounded p-4 shadow"
      style={{backgroundColor: '#8EE4AF'}}>
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full mr-5"
          src={
            song.snippet.thumbnails.medium
              ? song.snippet.thumbnails.medium.url
              : ''
          }
          alt=""
        />
        <div className="meta" onClick={() => dispatch(getPlayingSongs(song))}>
          <p className="title p-0 m-0">{title}</p>
          <em className="author p-0 m-0">{author}</em>
        </div>
      </div>
      <a
        href={`https://warm-springs-86808.herokuapp.com/api/download/${
          song.id
        }/song/${lrtrim(title)}`}
        download
        className="mt-3">
        <i
          className={'fas fa-arrow-alt-circle-down '}
          style={{color: '#61ad7f', fontSize: '18px'}}
        />
      </a>
    </div>
  );
}
