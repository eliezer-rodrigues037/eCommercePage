import React from "react";
import AdminProducts from "../../components/adminProducts/AdminProducts";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

export default function Admin() {
    return (
        <>
            <Navbar />
            <Container>
                <AdminProducts />
            </Container>
        </>
    );
}
