import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const CLIENT_ID = "7eb1782608bb4346ad27933870446156"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"


  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)

    }

    setToken(token)

  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const searchArtists = (e) => {
    e.preventDefault()
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }

    })
    setArtists(data.artists.items)
  }

  const renderArtist = () => {
    return artists.map(artists => {
      <div key={artists.id}>
        {artists.images.length ? <img src={artists.image[0].url} /> : <div>No image</div>}
        {artists.name}
      </div>
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>Spotipy App</div>
        {/* <div className="Playlist">
          <h1>Create Playlist</h1>
          <PlaylistContainer />
        </div>
        <Sample /> */}
        {!token ?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
          : <button onClick={logout}>Logout</button>
        }

        {token ?
          <form onSubmit={searchArtists} >
            <input type="text" onChange={e => setSearchKey(e.target.value)} />
            <button type={"submit"}>search</button>
          </form>

          : <h2>Please Login</h2>
        }

        {renderArtists()}
      </header>
    </div>
  );
}

export default App;
