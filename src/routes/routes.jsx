import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonsList } from "../components/home";
import PokemonDetail  from "../components/pokemon/index"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokemonsList />} />
                <Route exact path="/pokemon/:name" element={<PokemonDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }