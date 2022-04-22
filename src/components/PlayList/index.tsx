import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import React from "react";
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
} from '@chakra-ui/react';
import { retrieveUserId, createPlaylist, pushSongs } from "../../services/axios.service";
import { songUrisInterface } from "../../interfaces/interface";
import { useAppSelector } from "hook/hook";


const PlayList = ({ songUris }: songUrisInterface) => {
    const [playlistId, setPlaylistId] = useState("");
    const token = useAppSelector((state) => state.token.value);
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
            pushSongs(playlistId, songUris, token)
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

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // handle form submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (form.title.length > 10) {
            createPlaylist(userId, form.title, form.description, token)
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
                        <FormControl>
                            {/* <FormLabel htmlFor="title" >Title</FormLabel> */}
                            <Input
                                type="text"
                                placeholder="Title"
                                shadow="lg"
                                name="title"
                                value={form.title}
                                onChange={handleForm}
                                style={{
                                    width: '20%',
                                    fontSize: '1rem'
                                }}
                            />
                            <FormHelperText>Playlist Title</FormHelperText>
                        </FormControl>
                    </div>
                    <div
                        style={{ padding: '10px', }}
                    >
                        <FormControl>
                            {/* <FormLabel htmlFor="description">Description</FormLabel> */}
                            <Input
                                type={'text'}
                                style={{
                                    width: '20%',
                                    fontSize: '1rem'
                                }}
                                placeholder="Description"
                                shadow={'lg'}
                                name="description"
                                value={form.description}
                                onChange={handleForm}
                            />
                            <FormHelperText>Playlist Description</FormHelperText>
                        </FormControl>
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