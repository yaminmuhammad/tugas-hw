


const CreatePlaylist = ({ handleSubmit, newPlaylist, handleText, handleValidation }) => {

    return (
        <>
            <h1>Create your playlist!</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <h4>Enter New Playlist Title</h4>
                    <input name='title' type="text" id='title' onChange={handleText} placeholder='Min 10 Char' value={newPlaylist.title} />
                    {(!handleValidation(newPlaylist.title)) ? <p className='incorrect-val'>Title must be more than 10 character</p> : <p className='correct-val'>Its good</p>}
                    <h4>Enter New Playlist Description</h4>
                    <textarea name="description" id="" cols="30" rows="10" value={newPlaylist.description} onChange={handleText}></textarea>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreatePlaylist;