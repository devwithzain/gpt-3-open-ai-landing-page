import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from './App';
import "./index.scss";
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);