import './styles/App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Container from './components/Container';
import TimeLine from './components/TimeLine';
import VideoPlayer from './components/VideoPlayer';
import AppContext from './Helper/AppContext';
import {useState} from 'react';

function App() {
  const [playingVideo, setPlayingVideo] = useState(false)

  return (
    <AppContext.Provider value={{
      video: {
        playing: playingVideo,
        setPlaying: setPlayingVideo
      }
    }}>
      <div className="Amotion">
        <Header />
        <Container>
          <SideBar
            title={"Items:"}
          />
          <VideoPlayer />
        </Container>
        <TimeLine />
      </div>
    </AppContext.Provider>
  );
}

export default App;
