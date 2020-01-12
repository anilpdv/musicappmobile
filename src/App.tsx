import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './reducers/index';
import './App.css';
import SongsList from './components/SongsListView/SongsList';
import AudioPlayer from './components/SongPlayer/AudioPlayer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const audioLists = useSelector(
    (state: RootState) => state.songsplaying.songsplaying,
  );
  return (
    <div
      className="App "
      style={{backgroundColor: '#5CDB95', width: window.innerWidth}}>
      <SongsList />
      {audioLists ? <AudioPlayer /> : ''}
    </div>
  );
};

export default App;
