import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import styled from "styled-components";


const PokemonsList = () => {
    const { pokemons, loading, error } = useFetchPokemons(10);

    if (loading) return <p>Carregando Pokémons...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            <Section>
                {pokemons.map((pokemon, index) =>
                    <div key={index}>
                        <Img src={pokemon.image} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </div>
                )}
            </Section>
        </>
    )
}

const Section = styled.section`
    margin: 100px;
    background-color: rgba(250, 247, 247, 0.5);
    border-radius: 25px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
`

const Img = styled.img`
    width: 90px;
    hight: 120px;
    margin: 20px;
`

export { PokemonsList }