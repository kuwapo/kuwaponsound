import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import theme from "./theme/theme";

// bodyのbackGroundをMUIのthemeのyellowにする
document.body.style.backgroundColor = theme.palette.background.default;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
