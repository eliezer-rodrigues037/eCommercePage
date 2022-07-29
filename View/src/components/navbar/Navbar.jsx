import React from "react";
import { Container, NavItems, NavItemsContainer } from "./styles";

export default function Navbar() {
    const handleLogout = () => {};

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
        </Container>
    );
}
