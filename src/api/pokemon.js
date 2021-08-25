export const pokemonAPI = {
    url: 'https://pokeapi.co/api/v2',
    getPokemonByNumber: async function(number) {
        const response = await fetch(`${this.url}/pokemon/${number}`);
        const pokemon = await response.json();
        return pokemon;
    }
};