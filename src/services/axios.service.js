import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// console.log(token);
const retrieveSongs = (searchSong, token) => {
    return instance.get(`/search`, {
        params: {
            q: searchSong,
            type: "track",
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const retrieveUserId = (token) => {
    return instance.get(`/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const createPlaylist = ({ userId, title, description, token }) => {
    return instance.post(`/users/${userId}/playlists`,
        {

            name: title,
            description: description,
            public: false,
            collaborative: false,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },

        });
};

const pushSongs = ({ playlistId, songUris, token }) => {
    return instance.post(`/playlists/${playlistId}/tracks`,
        {

            uris: [...songUris],
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
};

export { retrieveSongs, retrieveUserId, createPlaylist, pushSongs };
