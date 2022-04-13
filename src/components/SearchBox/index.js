import React from "react";
import { Button, TextField } from "@mui/material";


const SearchBox = ({ setSearchSong, getSong }) => {
    return (
        <div
            style={{

                width: '50%',
                textAlign: 'center',
                margin: 'auto',
            }}
        >
            <TextField
                variant="outlined"
                label="Search"
                type="search"
                onChange={(e) => setSearchSong(e.target.value)}
                placeholder="Input Track "
                style={{ width: '80%', paddingRight: '1rem', }}
            />
            <Button
                variant="contained"
                size="large"
                onClick={getSong}
                style={{
                    padding: '12px 32px',
                    borderRadius: '0.5rem',
                    fontSize: '16px',
                    backgroundColor: '#12ea43',
                    outline: 'none',
                    cursor: 'pointer',
                }}
            >
                Search
            </Button>
        </div>
    );
};

export default SearchBox;
