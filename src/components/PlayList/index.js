import { useEffect, useState } from "react";
import axios from "axios";

const PlayList = ({ token, userId, songUris }) => {
    const [playlistId, setPlaylistId] = useState("");
    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    // run addSong function when playlistId is set
    useEffect(() => {
        if (playlistId) {
            addSongs(playlistId);
        }
    }, [playlistId]);

    // get the form data
    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.title.length > 10) {
            await axios
                .post(
                    `https://api.spotify.com/v1/users/${userId}/playlists`,
                    {
                        name: form.title,
                        description: form.description,
                        public: false,
                        collaborative: false,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
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

    // add songs to the playlist
    const addSongs = async (id) => {
        await axios
            .post(
                `https://api.spotify.com/v1/playlists/${id}/tracks`,
                {
                    uris: [...songUris],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <div>
                        <label htmlFor="title" >
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={form.title}
                            onChange={handleForm}
                        />
                    </div>
                    <div >
                        <label htmlFor="title">
                            Description
                        </label>
                        <input
                            type="text"

                            placeholder="Description"
                            name="description"
                            value={form.des}
                            onChange={handleForm}
                        />
                    </div>
                    <div>
                        <button
                            id="submit"
                            type="submit"

                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlayList;