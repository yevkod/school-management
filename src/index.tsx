import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import WebFont from "webfontloader";
import App from "./App";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

WebFont.load({
    google: {
        families: ['Poppins', "Poppins:500,700,400,600","undefined:"]
    }
});

root.render(
    <StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </StrictMode>,
);

