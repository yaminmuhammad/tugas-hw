import React from "react";
import AuthButton from "../BtnAuth";

const NotAuthView = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>Click Button Auth here !</h1>
            <AuthButton />
        </div>
    );
};

export default NotAuthView;
