import React, { useState } from "react";
import { Container, NavItems, NavItemsContainer } from "./styles";
import { logout, isAdmin } from "../../services/auth";
import { Link, Navigate } from "react-router-dom";

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
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        {isAdmin() && (
                            <li>
                                <Link to="/admin">Administração</Link>
                            </li>
                        )}
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
