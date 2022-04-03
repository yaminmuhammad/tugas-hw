

const Recent = ({ img, title, artist }) => {

    return (
        <div className="Recent-container">
            <div className="thumbnail-wrapper">
                <img src={img} alt="" className="thumbnail" />
            </div>
            <div className="Content-recent-wrapper">
                <p className="track-title">{title}</p>
                <p className="artist-name">{artist}</p>
            </div>
        </div>
    )
}

export default Recent;