import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonsList } from "../components/home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokemonsList />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }