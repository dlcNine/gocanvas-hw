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
    useEffect(() => {
        (async () => {
            await _pickRandomPokemon();
        })();
    }, []);

    
    
    async function _pickRandomPokemon() {
        const randomFirstGenNumber = _getRandomFirstGenNumber();
        const pokemon = await pokemonAPI.getPokemonByNumber(randomFirstGenNumber);
        setCurrentPokemon(pokemon);
    }

    function handleGuess(guess) {
        const currentPokemonName = currentPokemon.name;
        if (guess === currentPokemonName) {
            alert('correct');
            // wipe the old guess
            _pickRandomPokemon();
        } else {
            alert('incorrect');
        }
    }

    return (
        <>
            <Banner />
            <Display 
                imageURL={currentPokemon.sprites.front_default}
                actualName={currentPokemon.name}
            />
            <Guess actualName={currentPokemon.name} onGuess={handleGuess} />
            <Details details={_getPokemonDetails(currentPokemon)} isCorrect={isCorrect} />
        </>
    );
}

export default App;
