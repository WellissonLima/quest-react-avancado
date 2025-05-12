import { useEffect, useState, useRef } from "react";

export const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const limit = 10;

    const hasFetched = useRef(false);

    const fetchPokemons = async (currentOffset = 0) => {
        setLoading(true);

        try {


            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${limit}`);
            if (!response.ok) throw new Error("Erro ao buscar Pokémon");

            const data = await response.json();

            console.log(data)

            const detailsPromises = data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const details = await res.json();
                const image = details.sprites?.other?.dream_world?.front_default;
                return {
                    name: details.name,
                    image
                };
            });

            const newPokemons = await Promise.all(detailsPromises);
            setPokemons((prev) => [...prev, ...newPokemons]);
            setOffset((prev) => prev + limit);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetchPokemons();
        }
    }, []);

    const loadMorePokemons = () => fetchPokemons(offset);

    return { pokemons, loading, error, loadMorePokemons };
};