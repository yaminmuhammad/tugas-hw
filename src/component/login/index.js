import { useEffect, useState } from "react";


const Login = () => {

    const [login, setLogin] = useState(false);
    const [token, setToken] = useState("");
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = process.env.REACT_APP_SPOTIFY_SCOPES;

    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    }

    const handleLogout = () => {
        setLogin(false);
        setToken("");
        localStorage.clear()
        window.location = REDIRECT_URI;
    }


    useEffect(() => {
        let url = window.location.hash;
        if (url.length > 0) {
            url = url.substring(1).split("&")[0].split("=")[1];
            setToken(url);
            setLogin(true);

            localStorage.setItem("access_token", url);
        }
    }, []
    )
    return (
        <>
            {
                (!login) ?
                    <div className="Login-button" onClick={handleLogin} >Login to Spotify</div>
                    :
                    <div className="Logout-button" onClick={handleLogout} >Logout</div>
            }
        </>
    );

}

export default Login;