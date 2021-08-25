function Display({ imageURL, actualName }) {
    return (
        <figure>
            <img src={imageURL} alt="mystery pokemon" />
            <figcaption>{actualName}</figcaption>
        </figure>
    );
}

export default Display;