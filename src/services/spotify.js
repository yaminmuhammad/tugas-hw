import axios from 'axios';

export const getCurrentProfile = async (token) => {
    const res = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export const createPlaylist = async (user, token, payload) => {
    return await axios.post(
        `https://api.spotify.com/v1/users/${user}/playlists`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const addItemToPlaylist = async (playlistId, token, uris) => {
    return await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${encodeURIComponent(
            uris
        )}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
