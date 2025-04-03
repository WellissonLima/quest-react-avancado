import { useEffect, useState } from "react";
import styled from "styled-components";


async function getPokemons() {
    const pokemons = []

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 800);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        const data = await response.json();

        pokemons.push({
            name: data.name,
            image: data.sprites.other.dream_world.front_default
        });
    }
    console.log(pokemons)
    return pokemons;
}

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const pokemonsData = await getPokemons()
            setPokemons(pokemonsData)
        }
        fetchData();
    }, []);

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