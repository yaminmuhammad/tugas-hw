import React from "react";


const SearchBox = ({ setSearchSong, getSong }) => {
    return (
        <div
            style={{
                padding: '1rem',
                width: '50%',
                textAlign: 'center',
                margin: 'auto',
            }}
        >
            <input
                type="search"
                onChange={(e) => setSearchSong(e.target.value)}
                placeholder="Input Track "
                style={{ padding: '0.5rem 1rem', width: '80%', fontSize: '1rem' }}
            />
            <button
                onClick={getSong}
                style={{
                    padding: '0.55rem 2rem',
                    fontSize: '16px',
                    backgroundColor: '#12ea43',
                    outline: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBox;
