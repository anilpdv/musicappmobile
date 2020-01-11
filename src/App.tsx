import React from "react";
import "./App.css";
import SongsList from "./components/SongsListView/SongsList";
import AudioPlayer from "./components/SongPlayer/AudioPlayer";

const App: React.FC = () => {
  return (
    <div className="App ">
      <SongsList />
      <AudioPlayer />
    </div>
  );
};

export default App;
