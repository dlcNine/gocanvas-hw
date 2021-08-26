import './display.css';

function Display({ imageURL, hasGuessed, isCorrect }) {
    const message = isCorrect ? 'Correct!' : 'Wrong';
    return (
        <figure className="display">
            <img src={imageURL} alt="mystery pokemon" />
            { hasGuessed && <figcaption className="display__message">{message}</figcaption> }
        </figure>
    );
}

export default Display;