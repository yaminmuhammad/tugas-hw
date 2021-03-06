
import { useEffect, useState } from "react";
import Song from "../components/Song";
import SearchBox from "../components/SearchBox";
import PlayList from "../components/PlayList";
import { retrieveSongs } from "../services/axios.service";
import React from "react";
import { selectedInterface, songDataInterface } from "interfaces/interface";
import { useAppSelector } from "hook/hook";
import { Heading, Text } from "@chakra-ui/react";
import Navbar from "components/Navbar";

const Homework = () => {
    const token = useAppSelector((state) => state.token.value);
    const [searchSong, setSearchSong] = useState("");
    const [songData, setSongData] = useState<songDataInterface[]>([]);
    const [selectedSongs, setSelectedSongs] = useState<
        selectedInterface["uri"][]
    >([]);
    const [combineSongs, setCombineSongs] = useState<songDataInterface[]>([]);

    // get the token from the url
    useEffect(() => {
        const handleCombineSongs = songData.map((song: songDataInterface) => ({
            ...song,
            isSelected: selectedSongs.find((data) => data === song.uri)
                ? true
                : false,
        }));
        setCombineSongs(handleCombineSongs);
    }, [songData, selectedSongs]);

    // a function to get song data from spotify
    const getSong = () => {
        retrieveSongs(searchSong, token)
            .then((response) => {
                setSongData(response.data.tracks.items);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // a function to handle the select state of the song
    const handleSelect = (uri: string) => {
        const selected = selectedSongs.find((song) => song === uri);
        selected
            ? setSelectedSongs(selectedSongs.filter((song) => song !== uri))
            : setSelectedSongs([...selectedSongs, uri]);
    };

    // here is the songs view
    return (
        <div>
            <div
                style={
                    {
                        textAlign: "center",
                    }
                }
            >
                {/* search for songs and create playlists easier */}
                <Heading
                    fontWeight={800}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                    marginBottom={'3rem'}
                    marginTop={'1rem'}
                    fontFamily={'Inter, Roboto, sans-serif'}
                >
                    <Navbar />
                    Create playlists <br />
                    <Text as={'span'} color='#12ea43'>
                        easier.
                    </Text>
                </Heading>
            </div>
            <SearchBox getSong={getSong} setSearchSong={setSearchSong} />
            <PlayList songUris={selectedSongs} />

            <div className="container-song">
                {combineSongs.map((song) => {
                    const { uri, name, artists, album, isSelected } = song;
                    return (
                        <Song
                            key={uri}
                            uri={uri}
                            image={album.images[0]?.url}
                            title={name}
                            album={artists[0]?.name}
                            selectState={handleSelect}
                            isSelected={isSelected}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Homework;
