import data from './dataSample.js';
import './App.css';
import PlaylistItem from './components/PlaylistItem.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlaylistItem
          title={data.name}
          image={data.album.images[0].url}
          album={data.artists[0].name}
          date={data.album.release_date}
        />
      </header>

    </div>
  );
}

export default App;
