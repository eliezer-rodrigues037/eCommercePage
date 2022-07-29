import React, { useEffect, useState } from "react";
import { Container, NavItems, NavItemsContainer } from "./styles";
import { logout, isAuthenticated } from "../../services/auth";
import { Navigate } from "react-router-dom";

export default function Navbar() {
    const [authenticated, setAuthenticated] = useState(true);

    const handleLogout = () => {
        logout();
        setAuthenticated(false);
    };

    return (
        <Container>
            <NavItemsContainer>
                <NavItems>
                    <h1>eCommerce page</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </NavItems>
                <button onClick={handleLogout} className="btn">
                    Logout
                </button>
            </NavItemsContainer>
            {!authenticated && <Navigate to="/" />}
        </Container>
    );
}
