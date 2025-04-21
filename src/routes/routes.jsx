import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonsList } from "../components/home";
import DetailsPage from "../pages/DetailsPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokemonsList />} />
                <Route exact path="/pokemon/:name" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }