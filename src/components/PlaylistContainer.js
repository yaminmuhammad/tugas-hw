import PlaylistItem from "./PlaylistItem";
import data from "../constants/data";

function PlaylistContainer() {

    function renderPlaylistItems() {
        return data.map((item) => {
            const { id, album, name: songName, artists } = item;
            return (
                <PlaylistItem
                    key={id}
                    image={album.images[0].url}
                    songName={songName}
                    albumName={album.name}
                    artists={artists}
                />
            );
        });
    }

    return <div className="ply-cntr">
        {renderPlaylistItems()}
    </div>
}

export default PlaylistContainer;