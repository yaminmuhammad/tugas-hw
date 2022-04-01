import axios from "axios";
import RowAlbum from "../components/RowAlbum";
import { useEffect, useState } from "react";
import NotAuthView from "../components/NoAuth";
import AuthView from "../components/ViewAuth";

export const Homework = () => {
    const [valInput, setValInput] = useState('');
    const [tracks, setTracks] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [tempArr, setTempArr] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState([]);

    const access_token = new URLSearchParams(window.location.hash).get(
        '#access_token'
    );

    const handleClick = (e) => {
        const findIndex = tracks.findIndex((track) => track.uri === e.target.id);

        // eslint-disable-next-line no-unused-expressions
        tracks[findIndex].isSelected === false
            ? ((tracks[findIndex].isSelected = true), tempArr.push(tracks[findIndex]))
            : (tracks[findIndex].isSelected = false);

        setIsUpdated(true);
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
        return tracks.map((album, index) => {
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
    }, [access_token]);

    useEffect(() => {
        renderRow();
        setIsUpdated(false);
    }, [isUpdated]);

    const getSongList = async () => {
        await axios
            .get(
                `https://api.spotify.com/v1/search?q=${valInput}&limit=20&type=track`,
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
                console.log(newArr);
            })
            .catch((error) => console.log(error));
    };

    const handleSubmit = () => {
        setSelectedTracks([...new Set(tempArr)]);
        getSongList();
    };

    const handleChange = (e) => {
        setValInput(e.target.value);
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
