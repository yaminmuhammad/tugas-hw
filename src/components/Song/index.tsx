import React from "react";
import { songInterface } from "interfaces/interface";
import { Button, Text } from "@chakra-ui/react";

const Song = ({ uri, image, title, album, selectState, isSelected }: songInterface) => (

    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '.75rem',
            rowGap: '.3rem',
            columnGap: '.1rem',
            marginBottom: '1rem',
            backgroundColor: '#E5E5E5',
        }}
    >
        <img
            src={image}
            alt={title}
            data-testid="imageSong"
            style={{
                marginRight: '1rem',
                borderRadius: '1rem 0 0 1rem',
                width: '180px',
                height: '180px',
            }} />
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.5rem',
                alignItems: 'start',
                width: '200px',
                rowGap: '1rem',
            }}
        >
            <Text fontSize="larger" fontWeight="700" data-testid="titleSong" >{title}</Text>
            <Text fontSize="med" opacity="50%" data-testid="albumSong" >{album}</Text>
            <Button
                colorScheme={isSelected ? "red" : "green"}
                size="sm"
                height={30}
                borderRadius={5}
                onClick={() => {
                    selectState(uri);
                }}
                data-testid="buttonSong"
            >
                {isSelected ? "DESELECT" : "SELECT"}
            </Button>
        </div>
    </div>

);

export default Song;