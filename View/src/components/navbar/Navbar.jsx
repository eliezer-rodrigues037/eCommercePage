import React from "react";
import { Container, NavItems, NavItemsContainer } from "./stles";

export default function Navbar() {
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
                <button className="btn">Logot</button>
            </NavItemsContainer>
        </Container>
    );
}
