import './display.css';

function Display({ imageURL, hasGuessed, isCorrect }) {
    const message = isCorrect ? 'Correct!' : 'Wrong';
    let displayMessageClasses = !hasGuessed ? '_v-hidden' : '';
    return (
        <div className="display">
            <div className="display__placeholder">
                { Boolean(imageURL) && <img src={imageURL} alt="mystery pokemon" /> }
            </div>
            <div className={displayMessageClasses}>{message}</div>
        </div>
    );
}

export default Display;