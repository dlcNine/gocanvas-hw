import React, { useEffect, useState } from 'react';

import Banner from './components/Banner/Banner';
import Display from './components/Display/Display';
import Guess from './components/Guess/Guess';
import Details from './components/Details/Details';

import { pokemonAPI } from './api/pokemon';

function _getRandomFirstGenNumber() {
    const numInFirstGen = 151;
    // the API starts counting at 1 instead of 0
    const randomNumber = Math.floor(Math.random() * numInFirstGen) + 1;
    return randomNumber;
}

function _getPokemonDetails(pokemon) {
    let type = '';
    const joinCharacter = '/';
    for (let index = 0; index < pokemon.types.length; index++) {
        type += pokemon.types[index].type.name;
        if (index !== pokemon.types.length - 1) {
            type += joinCharacter;
        }
    }
    return {
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        type
    };
}

function App() {
    const [currentPokemon, setCurrentPokemon] = useState({
        sprites: {
            front_default: ''
        },
        name: '',
        height: '',
        weight: '',
        types: []
    });
    const [hasGuessed, setHasGuessed] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [numCombo, setNumCombo] = useState(0);
    useEffect(() => {
        (async () => {
            await _pickRandomPokemon();
        })();
    }, []);

    async function _pickRandomPokemon() {
        try {
            const randomFirstGenNumber = _getRandomFirstGenNumber();
            const pokemon = await pokemonAPI.getPokemonByNumber(randomFirstGenNumber);
            setCurrentPokemon(pokemon);
        } catch (e) {
            console.error(e);
            alert("There was a problem finding pokemon. Please refresh the page.");
        }
    }

    function handleGuess(guess) {
        const currentPokemonName = currentPokemon.name;
        setHasGuessed(true);
        if (guess === currentPokemonName) {
            setNumCombo(numCombo + 1);
            setIsCorrect(true);
        } else {
            setNumCombo(0);
            setIsCorrect(false);
        }
    }

    function prepNextPokemon() {
        setHasGuessed(false);
        setIsCorrect(false);
        _pickRandomPokemon();
    }

    return (
        <>
            <Banner />
            <main className="main">
                { Boolean(numCombo) && <span className="counter">{numCombo}</span> }
                <Display 
                    imageURL={currentPokemon.sprites.front_default}
                    hasGuessed={hasGuessed}
                    isCorrect={isCorrect}
                />
                <Guess 
                    onGuess={handleGuess} 
                    onNext={prepNextPokemon} 
                    hasGuessed={hasGuessed} 
                    isCorrect={isCorrect} 
                />
                <Details details={_getPokemonDetails(currentPokemon)} hasGuessed={hasGuessed} />
            </main>
        </>
    );
}

export default App;
