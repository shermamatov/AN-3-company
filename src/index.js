import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import ProductContext from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthContext>
            <ProductContext>
                <App />
            </ProductContext>
        </AuthContext>
    </BrowserRouter>
);
