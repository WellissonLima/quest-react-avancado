import {
    Container,
    Title,
    Image,
    Section,
    MovesList,
    LeftColumn,
    RightColumn,
} from "./PokemonDetails.styles";
import { Link } from "react-router-dom";

const PokemonDetails = ({ pokemon, loading, error }) => {
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!pokemon) return null;

    return (
        <Container>
            <Link to='/'>Home</Link>
            <LeftColumn>
                <Image src={pokemon.image || "https://via.placeholder.com/150"} alt={pokemon.name} />
                <Title>{pokemon.name}</Title>
            </LeftColumn>

            <RightColumn>

                <Section>
                    <h2>Tipo(s)</h2>
                    <ul>
                        {pokemon.types?.map((type) => (
                            <li key={type}>{type}</li>
                        ))}
                    </ul>
                </Section>

                <Section>
                    <h2>Habilidades</h2>
                    <ul>
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.name}>
                                <strong>{ability.name}</strong>: {ability.description}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section>
                    <h2>Movimentos</h2>
                    {pokemon.moves && (
                        <MovesList>
                            {pokemon.moves.slice(0, 10).map((move, index) => (
                                <li key={index}>{move}</li>
                            ))}
                        </MovesList>
                    )}
                </Section>
            </RightColumn>
        </Container>
    );
};

export { PokemonDetails };
