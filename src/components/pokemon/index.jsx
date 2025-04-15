import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const PokemonDetail = () => {
    const { name } = useParams();
    const { pokemon, loading, error } = usePokemonDetails(name);

    if (loading) return <p>Carregando detalhes...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!pokemon) return <p>Pokémon não encontrado.</p>;

    return (
        <Container>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <p>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
        </Container>
    );
};

export default PokemonDetail;