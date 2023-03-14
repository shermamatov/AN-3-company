import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import Edit from "./components/Edit/Edit";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";
import CertificatePage from "./pages/CertificatePage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/confirm" element={<ConfirmPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/aboutus" element={<AboutPage />} />
                <Route path="/certificate" element={<CertificatePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
