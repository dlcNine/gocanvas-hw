function Display({ imageURL, hasGuessed, isCorrect }) {
    const message = isCorrect ? 'Correct!' : 'Wrong';
    return (
        <figure>
            <img src={imageURL} alt="mystery pokemon" />
            { hasGuessed && <figcaption>{message}</figcaption> }
        </figure>
    );
}

export default Display;