import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../reducer/tokenSlice";
import Song from "../components/Song";
import url from "../services/spotify";
import SearchBox from "../components/SearchBox";
import PlayList from "../components/PlayList";


export const Homework = () => {
    const token = useSelector((state) => state.token.value);
    const dispatch = useDispatch();

    const [userId, setUserId] = useState("");
    const [searchSong, setSearchSong] = useState("");
    const [songData, setSongData] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [combineSongs, setCombineSongs] = useState([]);

    // get the token from the url
    useEffect(() => {
        const queryString = new URL(window.location.href.replace("#", "?"))
            .searchParams;
        const accessToken = queryString.get("access_token");
        getUserId(accessToken);
        dispatch(setToken(accessToken));
    }, []);

    // basically pass songData to combineSongs and add isSelected to combineSongs
    useEffect(() => {
        const handleCombineTracks = songData.map((song) => ({
            ...song,
            isSelected: selectedSongs.find((data) => data === song.uri),
        }));
        setCombineSongs(handleCombineTracks);
    }, [songData, selectedSongs]);

    // a function to get song data from spotify
    const getSong = async () => {
        await axios
            .get(
                `https://api.spotify.com/v1/search?q=${searchSong}&type=track&access_token=${token}`
            )
            .then((response) => {
                setSongData(response.data.tracks.items);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // a function to get the user id
    const getUserId = async (token) => {
        await axios
            .get(`https://api.spotify.com/v1/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUserId(response.data.id);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // a function to handle the select state of the song
    const handleSelect = (uri) => {
        const selected = selectedSongs.find((song) => song === uri);
        selected
            ? setSelectedSongs(selectedSongs.filter((song) => song !== uri))
            : setSelectedSongs([...selectedSongs, uri]);
    };

    // here is the songs view
    return (
        <div>
            <div
                style={
                    {
                        textAlign: "center",
                    }
                }
            >
                <h2>
                    Create Playlist
                </h2>
                <a
                    href={url}
                    style={{
                        textDecoration: 'none', color: 'black', fontWeight: 'bold'
                    }}
                >
                    <button
                        style={{
                            padding: '1rem 4rem',
                            fontSize: "20px",
                            fontWeight: "bolder",
                            backgroundColor: '#12ea43',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Login with Spotify
                    </button>
                </a>
            </div>
            {/* if token is empty, hide the view*/}
            {!token ? (
                ""
            ) : (
                <div>
                    <SearchBox getSong={getSong} setSearchSong={setSearchSong} />
                    <PlayList
                        token={token}
                        userId={userId}
                        songUris={selectedSongs}
                    />

                    <div>
                        {combineSongs.map((song) => {
                            const { uri, name, artists, album, isSelected } = song;
                            return (
                                <Song
                                    key={uri}
                                    uri={uri}
                                    image={album.images[0]?.url}
                                    title={name}
                                    album={artists[0]?.name}
                                    selectState={handleSelect}
                                    isSelected={isSelected}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Homework;
