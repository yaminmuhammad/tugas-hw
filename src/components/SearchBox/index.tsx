import React from "react";
import { Box, Button, InputGroup, Input, } from "@chakra-ui/react";
import { searchInterface } from "interfaces/interface";

const SearchBox = ({ setSearchSong, getSong }: searchInterface) => {
    return (
        <Box>
            <div
                style={{
                    width: '50%',
                    textAlign: 'center',
                    margin: 'auto',
                }}
            >
                <InputGroup>
                    <Input
                        type="text"
                        shadow={'lg'}
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
                </InputGroup>
            </div>
        </Box>
    );
};

export default SearchBox;
