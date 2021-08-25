import React, { useEffect } from 'react';

import Banner from './components/Banner/Banner';
import Display from './components/Display/Display';
import Guess from './components/Guess/Guess';
import Details from './components/Details/Details';

import { pokemonAPI } from './api/pokemon';

function App() {
    useEffect(() => {
        (async () => {
            const pokemon = await pokemonAPI.getPokemonByNumber(3);
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
