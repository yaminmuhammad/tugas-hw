const Song = ({ uri, image, title, album, selectState, isSelected }) => {
    return (
        <div >
            <div>
                <img src={image} alt="Album" />
                <div >
                    <h5 >{title}</h5>
                    <p >{album}</p>
                </div>
            </div>
            <button

                onClick={() => {
                    selectState(uri);
                }}
            >
                {isSelected ? "DESELECT" : "SELECT"}
            </button>
        </div>
    );
};

export default Song;