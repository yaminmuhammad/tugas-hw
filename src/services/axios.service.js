import axios from "axios";
import store from "../store";

const state = store.getState();
const token = state.token.value;

const instance = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

console.log(token);
const retrieveSongs = (searchSong) => {
    return instance.get(`/search`, {
        params: {
            q: searchSong,
            type: "track",
        },
    });
};

const retrieveUserId = async () => {
    return await instance.get(`/me`);
};

const createPlaylist = ({ userId, title, description }) => {
    return instance.post(`/users/${userId}/playlists`, {
        params: {
            name: title,
            description: description,
            public: false,
            collaborative: false,
        },
    });
};

const pushSongs = ({ playlistId, songUris }) => {
    return instance.post(`/playlists/${playlistId}/tracks`, {
        params: {
            uris: [...songUris],
        },
    });
};

export { retrieveSongs, retrieveUserId, createPlaylist, pushSongs };
