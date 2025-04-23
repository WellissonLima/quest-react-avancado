import { useEffect, useState } from "react";

export const useFetchPokemons = (count = 10) => {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonsList = [];

                while (pokemonsList.length < count) {
                    const randomNumber = Math.floor(Math.random() * 800);
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
                    if (!response.ok) throw new Error("Erro ao buscar Pokémon");

                    const data = await response.json();
                    //console.log(data);
                    const image = data.sprites?.other?.dream_world?.front_default;

                    if (image) {
                        pokemonsList.push({
                            name: data.name,
                            image
                        });
                    }
                }

                setPokemons(pokemonsList);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [count]);

    return { pokemons, loading, error };
};