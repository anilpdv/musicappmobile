import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularSongs } from "../../actions/popularSongs.action";
import { RootState } from "../../reducers/index";
import Song from "../SongView/Song";

function SongsList() {
  const { popularSongs } = useSelector((state: RootState) => ({
    popularSongs: state.songs.popularSongs
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getSongs = () => {
      dispatch(getPopularSongs());
    };
    getSongs();
  }, []);

  return (
    <div className="p-6">
      {popularSongs
        ? popularSongs.items.map(item => <Song key={item.id} song={item} />)
        : 0}
      <button>click </button>
    </div>
  );
}

export default SongsList;
