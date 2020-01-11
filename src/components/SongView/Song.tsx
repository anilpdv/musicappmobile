import React from "react";
import { PopularItem } from "../../types/popular.data";
import { transformTitle } from "../../utils/helper";
import "./Song.css";
import { useDispatch } from "react-redux";
import { getPlayingSongs } from "../../actions/popularSongs.action";
import { Item } from "../../types/search.data";

type props = {
  song: PopularItem;
};

const convertType = (song: PopularItem): Item => {
  const songany: any = { id: {} };
  songany.etag = song.etag;
  songany.id.kind = song.kind;
  songany.id.videoId = song.id;
  songany.snippet = song.snippet;
  return songany;
};

export default function Song({ song }: props) {
  const { author, title } = transformTitle(song.snippet.title);
  const dispatch = useDispatch();
  const playingsong = convertType(song);

  return (
    <div className="flex mb-6 Song rounded p-4 shadow">
      <img
        className="w-12 h-12 rounded-full mr-5"
        src={
          song.snippet.thumbnails.standard
            ? song.snippet.thumbnails.standard.url
            : ""
        }
        alt=""
      />
      <div
        className="meta"
        onClick={() => dispatch(getPlayingSongs(playingsong))}
      >
        <p className="title p-0 m-0">{title}</p>
        <em className="author p-0 m-0">{author}</em>
      </div>
    </div>
  );
}
