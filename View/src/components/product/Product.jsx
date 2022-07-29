import React from "react";
import { Container, ProdSpecs } from "./styles";
import productImgMock from "../../assets/iPhone.jpg";

export default function Product({ nome, peso, preco, descricao }) {
    return (
        <Container>
            <img src={productImgMock} alt="Product image" />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <ProdSpecs>
                <p>Peso: {peso}g</p>
                <p>{preco} R$</p>
            </ProdSpecs>
        </Container>
    );
}
