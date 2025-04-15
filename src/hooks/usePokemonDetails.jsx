import { useEffect, useState } from "react";

export const usePokemonDetails = (name) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) throw new Error("Erro ao buscar detalhes do Pokémon");

                const data = await response.json();
                setPokemon(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [name]);

    return { pokemon, loading, error };
};