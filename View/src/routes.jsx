import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { isAuthenticated } from "./services/auth";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/" />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;
