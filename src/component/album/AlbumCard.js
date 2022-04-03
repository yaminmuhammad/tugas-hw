
import { useState, useEffect } from 'react';

const Albumcard = ({ data, handleSelectedtrack, handleUnselectedTrack }) => {
    const albumName = data.album.name;
    const songName = data.name;
    const url = data.album.images[0].url;
    const artistName = data.artists[0].name;
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        if (!selected) {
            setSelected(true);
            handleSelectedtrack(data);
        }
        else {
            setSelected(false);
            handleUnselectedTrack(data);
        }
    }


    return (
        <div className='Album-wrapper'>
            <div className='Album-image'>
                <img src={url} alt=''></img>
            </div>
            <div className='Album-description'>
                <p className='Album-name'>{albumName}</p>
                <p className='Album-title'>{songName}</p>
                <p className='Album-artist'>{artistName}</p>
            </div>
            <div className='Album-button' onClick={handleSelect}>
                {
                    (!selected) ? `Select` : `Deselect`
                }
            </div>
        </div>
    );
}

export default Albumcard;