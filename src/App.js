import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.album.images[0].url} className="App-logo" alt="logo" />
        <p className='nama-album'>{data.album.name}</p>
        <p>{data.artists[0].name}</p>
        <button className='btn-slct'>Select</button>
      </header>
    </div>
  );
}

export default App;
