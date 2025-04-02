import { useEffect, useState } from "react";


async function getPokemons() {
    const pokemons = []

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 800);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        const data = await response.json();

        pokemons.push({
            name: data.name,
            image: data.sprites.other.dream_world.front_default
        });
    }
    console.log(pokemons)
    return pokemons;
}

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const pokemonsData = await getPokemons()
            setPokemons(pokemonsData)
        }
        fetchData();
    }, []);

    return (
        <>
            {pokemons.map((pokemon, index) =>
                <div key={index}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                </div>
            )}
        </>
    )
}

export { PokemonsList }