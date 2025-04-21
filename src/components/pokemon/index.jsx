import {
    Container,
    Title,
    Image,
    Section,
    MovesList,
} from "./PokemonDetails.styles";

const PokemonDetails = ({ pokemon, loading, error }) => {
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!pokemon) return null;

    return (
        <Container>
            <Title>{pokemon.name}</Title>
            <Image src={pokemon.image} alt={pokemon.name} />
            <Section>
                <h2>Tipo(s)</h2>
                <ul>
                    {pokemon.types.map((types, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </ul>
            </Section>

            <Section>
                <h2>Habilidades</h2>
                <ul>
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>
                            <strong>{ability.name}</strong>: {ability.description}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section>
                <h2>Movimentos</h2>
                <MovesList>
                    {pokemon.moves.slice(0, 20).map((move, index) => (
                        <li key={index}>{move}</li>
                    ))}
                </MovesList>
            </Section>
        </Container>
    );
};

export { PokemonDetails };
