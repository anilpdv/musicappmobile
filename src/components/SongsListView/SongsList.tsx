import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getPopularSongs,
  getSongsBySearch,
} from '../../actions/popularSongs.action';
import {RootState} from '../../reducers/index';
import Song from '../SongView/Song';
import SongItem from '../SongView/SongItem';

function SongsList() {
  const [query, setQuery] = useState('');
  const {popularSongs, searchSongs} = useSelector((state: RootState) => ({
    popularSongs: state.songs.popularSongs,
    searchSongs: state.songs.searchSongs,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getSongs = () => {
      dispatch(getPopularSongs());
    };
    getSongs();
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(getSongsBySearch(query));
  };

  return (
    <div>
      <div className="search  h-32" data-aos="fade-left">
        <form onSubmit={onSubmit}>
          <input
            className="Input bg-blue-200 appearance-none  rounded p-5  py-5 m-4   leading-tight text-white "
            id="inline-full-name"
            style={{backgroundColor: '#379683', width: '90%'}}
            type="text"
            value={query}
            placeholder="Search.."
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
      {popularSongs === null && searchSongs ? (
        <div className="px-6  ">
          {searchSongs
            ? searchSongs.items.map(item => (
                <SongItem key={item.id.videoId} song={item} />
              ))
            : 0}
        </div>
      ) : (
        <div className="px-6  ">
          {popularSongs
            ? popularSongs.items.map(item => <Song key={item.id} song={item} />)
            : 0}
        </div>
      )}
    </div>
  );
}

export default SongsList;
