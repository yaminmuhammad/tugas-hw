import React from "react";

const FormPlaylist = ({
    handleSubmitPlaylist,
    handleChange,
    title,
    description,
}) => {
    return (
        <form
            onSubmit={handleSubmitPlaylist}
            style={{
                border: '2px solid black',
                padding: '1 rem',
                borderRadius: '1rem',
            }}
        >
            <h1>Simpan ke PlayList</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label
                    style={{
                        fontSize: '24px',
                        fontWeight: 'medium',
                        marginbottom: '1rem',
                    }}
                >
                    Title
                </label>
                <input
                    name="title"
                    style={{
                        padding: 'o.5rem 1rem',
                        width: '80%',
                        fontSIze: '1rem',
                    }}
                    placeholder="Masukkan judul"
                    onChange={handleChange}
                    value={title}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '1rem',
                }}
            >
                <label
                    style={{
                        fontSize: '24px',
                        fontWeight: 'medium',
                        marginbottom: '1rem',
                    }}
                >
                    Description
                </label>
                <input
                    name="description"
                    style={{
                        padding: 'o.5rem 1rem',
                        width: '80%',
                        fontSIze: '1rem',
                    }}
                    value={description}
                    onChange={handleChange}
                    placeholder="Masukkan deskripsi"
                />
            </div>
            <button
                type="submit"
                style={{
                    marginTop: '1rem',
                    padding: '0.55rem 2rem',
                    fontSize: '16px',
                    backgroundColor: '#00b894',
                    outline: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
            >
                Simpan
            </button>
        </form>
    );
}

export default FormPlaylist;