import url from "../../services/spotify";
import { useEffect } from "react";
import { useAppDispatch } from "hook/hook";
import { setToken } from "../../reducer/tokenSlice";
import React from "react";
import { Button } from "@chakra-ui/react";

const Login = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setToken(getToken() || ""));
    }, [dispatch]);

    const getToken = () => {
        const queryString = new URL(window.location.href.replace("#", "?"))
            .searchParams;
        const accessToken = queryString.get("access_token");
        return accessToken;
    };

    return (
        <div
            // style={{
            //     display: 'flex',
            //     flexDirection: 'column',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}
            className="App-header"
        >
            <h1>Spotify</h1>
            <a
                href={url}
            >
                <Button
                    variant="contained"
                    style={{
                        padding: '12px 32px',
                        borderRadius: '0.5rem',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#12ea43',
                        outline: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Login with Spotify
                </Button>
            </a>
        </div >
    );
};

export default Login;
