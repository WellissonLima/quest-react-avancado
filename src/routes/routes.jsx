import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:name" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }