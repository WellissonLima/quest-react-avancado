import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  background-color: rgba(220, 220, 220, 0.7);
  border-radius: 16px;
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 12px;
  width: 160px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  p {
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;


const PokemonsList = () => {
    const { pokemons, loading, error } = useFetchPokemons(10);

    if (loading) return <p>Carregando Pokémons...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            <CardsContainer>
                {pokemons.map((pokemon, index) =>
                  <Link key={index} to={`/pokemon/${pokemon.name}`}>
                    <PokemonCard>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </PokemonCard>
                  </Link>
                )}
            </CardsContainer>
        </>
    )
}

export { PokemonsList }