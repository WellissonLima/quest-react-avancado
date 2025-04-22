import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { PokemonDetails } from "../components/pokemon";

const PokemonDetailsContainer = () => {
    const { name } = useParams();
    const { pokemon, loading, error } = usePokemonDetails(name);

    return (
        <PokemonDetails pokemon={pokemon} loading={loading} error={error} />
    );
};

export default PokemonDetailsContainer;