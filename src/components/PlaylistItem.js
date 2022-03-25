const PlaylistItem = ({
    image,
    title,
    album,
    date,
}) => {
    return (
        <div className="song">
            <img src={image} alt={title} width="300px" />
            <div className="song-info">
                <h3>{title}</h3>
                <p>{album}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default PlaylistItem;