import { useFetchPokemons } from "../hooks/useFetchPokemons";
import Home from "../components/home";

const HomeContainer = () => {
    const { pokemons, loading, error } = useFetchPokemons(10);

    if (loading) return <p>Carregando Pokémons...</p>;
    if (error) return <p>Erro: {error}</p>;

    return <Home pokemons={pokemons} />
};

export default HomeContainer;