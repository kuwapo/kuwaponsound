import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Profile } from "./pages/Profile";

export const App = () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};
