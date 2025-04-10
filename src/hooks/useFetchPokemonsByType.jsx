import { useEffect, useState } from "react";

export const useFetchPokemonsByType = (type) => {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!type) return;

        const fetchByType = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
                const data = res.json();

                const firstTen = data.pokemon.slice(0, 10);

                const detailed = await Promise.all(
                    firstTen.map(async (p) => {
                        const res = await fetch(p.pokemon.url);
                        const data = await res.json();

                        return {
                            name: data.name,
                            image: data.sprites.other?.dream_world?.front_default,
                            types: data.types.map(t => t.type.name),
                        };
                    })
                );

                const withImages = detailed.filter(p => p.image);

                setPokemons(withImages);
            } catch (err) {
                setError("Erro ao buscar pokémons por tipo.");
            } finally {
                setLoading(false);
            }
        };

        fetchByType();
    }, [type]);

    return { pokemons, loading, error };
}