import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CharactersStudy from "./components/CharactersStudy.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
