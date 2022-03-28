import './App.css';
import PlaylistContainer from './components/PlaylistContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Playlist">
          <h1>Create Playlist</h1>
          <PlaylistContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
