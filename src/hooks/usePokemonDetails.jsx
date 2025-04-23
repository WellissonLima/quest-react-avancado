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
                
                console.log(data);

                // Buscar descrição das habilidades
                const abilitiesWithDescriptions = await Promise.all(
                    data.abilities.map(async ({ ability }) => {
                        const res = await fetch(ability.url);
                        const abilityData = await res.json();

                        //console.log(abilityData);

                        const effectEntry = abilityData.effect_entries.find(e => e.language.name === "en");
                        return {
                            name: ability.name,
                            description: effectEntry ? effectEntry.short_effect : "Descrição indisponível"
                        };
                    })
                );

                setPokemon({
                    name: data.name,
                    image: data.sprites.other.dream_world.front_default,
                    movies: data.moves.map(m => m.move.name),
                    types: data.types.map(t => t.type.name),
                    abilities: abilitiesWithDescriptions,
                });
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