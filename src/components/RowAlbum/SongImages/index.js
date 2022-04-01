import React from "react";

export const SongImage = ({ image }) => {
    return (
        <img
            src={image}
            alt=""
            style={{
                marginRight: '2rem',
                borderRadius: '1rem 0 0 1rem',
                width: '200px',
                height: '200px',
            }}
        />
    );
};
