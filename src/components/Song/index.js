import { Button } from "@mui/material";
import React from "react";

const Song = ({ uri, image, title, album, selectState, isSelected }) => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '1rem',
                    margin: '20px'
                }}
            >
                <img src={image} alt="Album" style={{
                    marginRight: '2rem',
                    borderRadius: '1rem 0 0 1rem',
                    width: '200px',
                    height: '200px',
                    paddingBottom: '30px'
                }} />
                <div >
                    <h1 style={{
                        fontSize: '32px', maxWidth: '800px'
                    }} >{title}</h1>
                    <h2 style={{
                        fontSize: '20px', opacity: '90%'
                    }} >{album}</h2>
                    <div>
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={() => {
                                selectState(uri);
                            }}
                            style={{
                                borderRadius: '0.5rem',
                                fontSize: '16px',
                                backgroundColor: '#12ea43',
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {isSelected ? "DESELECT" : "SELECT"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Song;