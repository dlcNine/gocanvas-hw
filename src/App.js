import React, { useEffect } from 'react';

import Banner from './components/Banner/Banner';
import Display from './components/Display/Display';
import Guess from './components/Guess/Guess';
import Details from './components/Details/Details';

import { pokemonAPI } from './api/pokemon';

function _getRandomFirstGenNumber() {
    const numInFirstGen = 151;
    const randomNumber = Math.floor(Math.random() * numInFirstGen) + 1;
    return randomNumber;
}

function App() {
    useEffect(() => {
        (async () => {
            const randomFirstGenNumber = _getRandomFirstGenNumber();
            const pokemon = await pokemonAPI.getPokemonByNumber(randomFirstGenNumber);
        })();
    }, []);
    return (
        <>
            <Banner />
            <Display />
            <Guess />
            <Details />
        </>
    );
}

export default App;
