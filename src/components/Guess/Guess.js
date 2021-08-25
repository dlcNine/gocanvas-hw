import { useRef } from 'react';

function Guess({ onGuess }) {
    const guessInputRef = useRef('');
    function _handleGuess(e) {
        e.preventDefault();
        const guess = guessInputRef.current.value;
        const sanitizedGuess = guess.trim().toLowerCase();
        onGuess(sanitizedGuess);
        guessInputRef.current.value = '';
    }
    return (
        <form name="guessPokemon">
            <input type="text" ref={guessInputRef} name="pokemonNameGuess" placeholder="It's..."/>
            <button type="submit" onClick={_handleGuess} >Guess</button>
        </form>   
    );
}

export default Guess;