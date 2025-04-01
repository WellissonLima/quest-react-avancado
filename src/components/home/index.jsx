import { useEffect, useState } from "react";

const pokemons = []

async function getPokemons() {
    for(let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 800)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        const data = await response.json();
    
        pokemons.push({
            name: data.name,
            image: data.sprites.other.dream_world.front_default
        })
    }
    console.log(pokemons)
}

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const pokemons = await getPokemons()
            setPokemons(pokemons)
        }
        fetchData()
    }, [])

    return (
        <>
            {pokemons.map((pokemons, index) => 
                <div key={index}>
                    <img src={pokemons} alt="pokemon" />
                </div>
            )}
        </>
    )
}

export { PokemonsList }