import url from "../../services/spotify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../reducer/tokenSlice";

const Login = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setToken(getToken()));
    }, [dispatch]);

    const getToken = () => {
        const queryString = new URL(window.location.href.replace("#", "?"))
            .searchParams;
        const accessToken = queryString.get("access_token");

        return accessToken;
    };

    return (
        <div
            style={{
                margin: 'auto',
                marginTop: '20px',
                textAlign: 'center',
                width: '50%'
            }}
        >
            <a
                href={url}
            >
                <button
                    style={{
                        padding: '12px 32px',
                        borderRadius: '0.5rem',
                        fontSize: '16px',
                        backgroundColor: '#12ea43',
                        outline: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Login with Spotify
                </button>
            </a>
        </div>
    );
};

export default Login;
