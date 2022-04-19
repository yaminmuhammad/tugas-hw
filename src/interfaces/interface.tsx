export interface songDataInterface {
    uri: string;
    album: {
        images: [{ url: string }];
    };
    name: string;
    artists: [{ name: string }];
    isSelected: boolean;
}

export interface selectedInterface {
    uri: string;
}
export interface songUrisInterface {
    songUris: selectedInterface["uri"][];
}

export interface searchInterface {
    setSearchSong: (value: string) => void;
    getSong: () => void;
}

export interface songInterface {
    uri: string;
    image: string;
    title: string;
    album: string;
    selectState: (uri: string) => void;
    isSelected: boolean;
}

export interface tokenState {
    value: string;
}
