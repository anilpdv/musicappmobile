import React from "react";
import "./App.css";
import SongsList from "./components/SongsListView/SongsList";
import AudioPlayer from "./components/SongPlayer/AudioPlayer";


const App: React.FC = () => {
  return (
    <div className="App p-6">
      <SongsList />
      <AudioPlayer />
    </div>
  );
};

export default App;
