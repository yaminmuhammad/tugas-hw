import { Component, useEffect, useState } from "react";
import Albumcard from "../album/AlbumCard";
import Recent from "../recent/Recent";
import Login from "../login";
const axios = require('axios').default;



const Search = ({ token }) => {
    const [keyword, setKeyword] = useState("");
    const [tracks, setTracks] = useState([]);
    const [recent, setRecent] = useState([]);


    const handleInput = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.get("https://api.spotify.com/v1/search", {
                params: {
                    type: 'track',
                    q: keyword,
                    limit: 5
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })
            setRecent(tracks);
            setTracks(response.data.tracks.items);
        }
        catch (e) {
            alert("Kamu belum login")
            console.error(e)
        }

    }
    return (
        <>
            <h4>Cant find your track?</h4>
            <h2>Search</h2>
            <br />
            <>
                <input type="text" onChange={handleInput} />
                <button onClick={handleSubmit}>Cari</button>
                <h1>Result : {keyword}</h1>
                <br />
                <div className="Album-container">

                    {
                        tracks.map((item) => (
                            <Albumcard
                                key={item.id}
                                albumName={item.album.name}
                                songName={item.name}
                                url={item.album.images[0].url}
                                artistName={item.artists[0].name}
                            />
                        ))
                    }
                </div>
                <h1>Recent Search</h1>
                <div className="Album-container">
                    {recent.map((item) => (
                        <Recent
                            key={item.id}
                            img={item.album.images[2].url}
                            title={item.name}
                            artist={item.artists[0].name}
                        />
                    )
                    )
                    }
                </div>
            </>
        </>
    )
}

export default Search;