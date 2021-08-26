import { useRef } from 'react';

function Guess({ onGuess, onNext, hasGuessed, isCorrect }) {
    const guessInputRef = useRef('');
    function _handleGuess(e) {
        e.preventDefault();
        const guess = guessInputRef.current.value;
        const sanitizedGuess = guess.trim().toLowerCase();
        if (!sanitizedGuess) {
            return;
        }
        onGuess(sanitizedGuess);
        guessInputRef.current.value = '';
    }

    function _handleNext(e) {
        e.preventDefault();
        onNext();
    }

    function _getHasNotGuessedMarkup() {
        return (
            <form name="guessPokemon">
                <input 
                type="text" 
                className="textbox"
                ref={guessInputRef} 
                name="pokemonNameGuess" 
                placeholder="It's..."
            />
                <button type="submit" className="button" onClick={_handleGuess} >Guess</button>
            </form>   
        );
    }

    function _getHasGuessedMarkup(isCorrect) {
        const innerText = isCorrect ? 'Next Pokemon' : 'Try Again'
        return (
            <form name="nextPokemon">
                <button type="submit" className="button" onClick={_handleNext} >{innerText}</button>
            </form>
        );
    }

    if (hasGuessed) {
        return _getHasGuessedMarkup(isCorrect);
    } 
    return _getHasNotGuessedMarkup();
}

export default Guess;