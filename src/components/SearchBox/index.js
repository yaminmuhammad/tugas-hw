import React from "react";


const SearchBox = ({ handleChange, handleSubmit }) => {
    return (
        <div
            style={{
                padding: '1rem',
                width: '100%',
                textAlign: 'center',
            }}
        >
            <input
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                onChange={handleChange}
                placeholder="Input Track "
                style={{ padding: '0.5rem 1rem', width: '80%', fontSize: '1rem' }}
            />
            <button
                onClick={handleSubmit}
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
