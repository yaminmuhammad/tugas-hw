const Song = ({ uri, image, title, album, selectState, isSelected }) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '1rem',
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
                        <button
                            onClick={() => {
                                selectState(uri);
                            }}
                            style={{
                                padding: '12px 32px',
                                borderRadius: '0.5rem',
                                fontSize: '16px',
                                backgroundColor: '#12ea43',
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {isSelected ? "DESELECT" : "SELECT"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Song;