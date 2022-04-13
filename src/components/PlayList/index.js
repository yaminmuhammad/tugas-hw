import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createPlaylist, pushSongs, retrieveUserId } from "../../services/axios.service";
import React from "react";
import { Button, TextField } from "@mui/material";

const PlayList = ({ songUris }) => {
    const [playlistId, setPlaylistId] = useState("");
    const token = useSelector((state) => state.token.value);
    const [userId, setUserId] = useState("");
    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    // run addSong function when playlistId is set
    useEffect(() => {
        const getUserId = () => {
            retrieveUserId(token)
                .then((response) => {
                    setUserId(response.data.id);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const addSongs = () => {
            pushSongs(token, playlistId, songUris)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        if (playlistId) {
            addSongs();
        }
        getUserId();
    }, [playlistId, songUris, token]);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.title.length > 10) {
            await createPlaylist(userId, form.title, form.description, token)
                .then((response) => {
                    setPlaylistId(response.data.id);
                })
                .catch((error) => {
                    console.log(error);
                });
            setForm({ title: "", description: "" });
            alert("Successfully created playlist");
        } else {
            alert("Title must be more than 10 characters");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div
                    style={{
                        padding: '1rem',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ padding: '10px', }}>
                        <h2 htmlFor="title" >
                            Title :
                        </h2>
                        <TextField
                            label="Title"
                            variant="outlined"
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={form.title}
                            onChange={handleForm}
                            style={{
                                width: '20%',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div
                        style={{ padding: '10px', }}
                    >
                        <h2 htmlFor="title">
                            Description :
                        </h2>
                        <TextField
                            label="Description"
                            multiline
                            variant="outlined"
                            rows={2}
                            type="text"
                            style={{
                                width: '20%',
                                height: '100px',
                                fontSize: '1rem',
                                resize: 'none'
                            }}
                            placeholder="Description"
                            name="description"
                            value={form.des}
                            onChange={handleForm}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            id="submit"
                            type="submit"
                            style={{
                                padding: '12px 32px',
                                borderRadius: '0.5rem',
                                fontSize: '16px',
                                backgroundColor: '#12ea43',
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlayList;