const PlaylistItem = ({
    image,
    songName,
    albumName,
    artists,
}) => {
    return (
        <div className="ply-itm">
            <img className="ply-img" src={image} alt={songName} width="300px" />
            <div className="ply-cntnt">
                <h3 className="ply-ttl">{songName}</h3>
                <p className="ply-desc-art">{artists.map((artist) => artist.name).join(', ')}</p>
                <p className="ply-desc-alb">{albumName}</p>
            </div>
            <div className="ply-act">
                <button className="btn-slct" >
                    Select
                </button>
            </div>
        </div>
    );
}

export default PlaylistItem;