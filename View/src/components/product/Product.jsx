import React from "react";
import { Container } from "./styles";
import productImgMock from "../../assets/iPhone.jpg";

export default function Product() {
    return (
        <Container>
            <img src={productImgMock} alt="Product image" />
            <h2>Product name</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia, culpa ipsam, minus repellendus excepturi accusamus harum saepe
            </p>
            <p>peso</p>
            <p>Preço</p>
        </Container>
    );
}
