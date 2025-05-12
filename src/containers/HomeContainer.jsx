import { useFetchPokemons } from "../hooks/useFetchPokemons";
import Home from "../components/home";
import styled from "styled-components";

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

const LoadMoreButton = styled.button`
  background-color: #ffcb05;
  color: #3b4cca;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #e0b200;
  }
`;

const HomeContainer = () => {
    const { pokemons, loading, error, loadMorePokemons } = useFetchPokemons(10);

    if (loading) return <p>Carregando Pokémons...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>

            <Home pokemons={pokemons} />

            <LoadMoreContainer>
                <LoadMoreButton onClick={loadMorePokemons}>
                    Carregar mais
                </LoadMoreButton>
            </LoadMoreContainer>
        </>
    )
};

export default HomeContainer;