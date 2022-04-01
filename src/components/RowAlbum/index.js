import React from "react";
import { ButtonSelect } from "./SelectBtn";
import { SongArtist } from "./SongArtists";
import { SongImage } from "./SongImages";
import { SongTitle } from "./SongTitles";

const RowAlbum = ({ image, title, artist, url, onClick, isSelected, id }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderRadius: '1rem',
            }}
        >
            <SongImage image={image} />
            <div style={{ color: '#1B1A17' }}>
                <SongTitle title={title} />
                <SongArtist artist={artist} />
                <ButtonSelect
                    url={url}
                    onClick={onClick}
                    isSelected={isSelected}
                    id={id}
                />
            </div>
        </div>
    );
};

export default RowAlbum;
