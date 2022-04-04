import axios from "axios";
import RowAlbum from "../components/RowAlbum";
import { useEffect, useState } from "react";
import NotAuthView from "../components/NoAuth";
import AuthView from "../components/ViewAuth";
import { addItemToPlaylist, createPlaylist, getCurrentProfile } from "../services/spotify";
import FormPlaylist from "../components/Form";



export const Homework = () => {
    const [user, setUser] = useState('');
    const [valInput, setValInput] = useState({
        title: '',
        description: '',
        searchInput: ''
    });
    const [tracks, setTracks] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [tempArr, setTempArr] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState([]);

    const access_token = new URLSearchParams(window.location.hash).get(
        '#access_token'
    );

    const handleClick = (e) => {
        const findIndex = tracks.findIndex((track) => track.uri === e.target.id);

        const removeItem = (arr, value) => {
            return arr.filter((ele) => {
                return ele !== value;
            });
        };
        const removeTemp = removeItem(tempArr, tracks[findIndex]);

        // eslint-disable-next-line no-unused-expressions
        tracks[findIndex].isSelected === false
            ? ((tracks[findIndex].isSelected = true), tempArr.push(tracks[findIndex]))
            : (tracks[findIndex].isSelected = false);

        setIsUpdated(true);
    };

    const handleSubmitPlaylist = (e) => {
        e.preventDefault();
        const payload = {
            name: valInput.title,
            description: valInput.description,
            public: false,
        };

        createPlaylist(user, token, payload).then((res) => {
            console.log(res.data.id);
            setValInput({ ...valInput, title: '', description: '' });
            const tempUris = tempArr.map((track) => track.uri);
            addItemToPlaylist(res.data.id, token, tempUris).then((res) => {
                setTracks([]);
                setTempArr([]);
                setSelectedTracks([]);
            });
        });
    };

    const handleClickSelected = (e) => {
        const findIndex = selectedTracks.findIndex(
            (track) => track.uri === e.target.id
        );
        const removeItem = (arr, value) => {
            return arr.filter((ele) => {
                return ele !== value;
            });
        };

        selectedTracks[findIndex].isSelected = false;
        const removeSelected = removeItem(
            selectedTracks,
            selectedTracks[findIndex]
        );
        const removeTemp = removeItem(tempArr, selectedTracks[findIndex]);
        setSelectedTracks([...removeSelected]);
        setTempArr([...removeTemp]);
    };

    const renderRow = () => {
        return tracks.filter(
            (track) => !selectedTracks.some((track2) => track.uri === track2.uri)
        )
            .map((album) => {
                return (
                    <RowAlbum
                        onClick={handleClick}
                        isSelected={album.isSelected}
                        image={album.album.images[1].url}
                        title={album.name}
                        artist={album.artists[0].name}
                        url={album.artists[0].uri}
                        key={album.id}
                        id={album.uri}
                    />
                );
            });
    };

    const renderSelectedRow = () => {
        return selectedTracks.map((album, index) => {
            return (
                <RowAlbum
                    onClick={handleClickSelected}
                    isSelected={album.isSelected}
                    image={album.album.images[1].url}
                    title={album.name}
                    artist={album.artists[0].name}
                    url={album.artists[0].uri}
                    key={album.id}
                    id={album.uri}
                />
            );
        });
    };

    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(access_token);
        if (access_token) {
            getCurrentProfile(access_token).then((res) => {
                setUser(res.id);
            });
        }
    }, [access_token]);

    useEffect(() => {
        renderRow();
        setIsUpdated(false);
    }, [isUpdated]);

    useEffect(() => { });

    const getSongList = async () => {
        await axios
            .get(
                `https://api.spotify.com/v1/search?q=${valInput.searchInput}&limit=20&type=track`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                const data = res.data.tracks.items;
                const newArr = data.map((v) => {
                    return { ...v, isSelected: false };
                });
                setTracks(newArr);
            })
            .catch((error) => console.log(error));
    };

    const handleSubmit = () => {
        setSelectedTracks([...new Set(tempArr)]);
        getSongList();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValInput({
            ...valInput,
            [name]: value,
        });
    };

    return (
        <div>
            <div
                style={{
                    padding: '0 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                }}
            >
                {token ? (
                    <AuthView handleChange={handleChange} handleSubmit={handleSubmit} />
                ) : (
                    <NotAuthView />
                )}
                {(tempArr.length > 0 || selectedTracks.length > 0) && (
                    <>
                        <FormPlaylist
                            title={valInput.title}
                            description={valInput.description}
                            handleChange={handleChange}
                            handleSubmitPlaylist={handleSubmitPlaylist}
                        />
                    </>
                )}
                {selectedTracks && renderSelectedRow()}
                {tracks.length > 0 && (
                    <>
                        <h1>List of tracks</h1>
                        {renderRow()}
                    </>
                )}
            </div>
        </div>
    );
};
