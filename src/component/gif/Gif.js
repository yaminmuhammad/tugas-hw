const Gif = ({ title, url }) => {
    // console.log(url);
    return (
        <div>
            <h1>{title}</h1>
            <img src={url} alt="gif"></img>
        </div>
    );

}

export default Gif;