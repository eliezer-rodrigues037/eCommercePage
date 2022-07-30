import React from "react";
import { Container } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { MdDisabledVisible } from "react-icons/md";

import productImgMock from "../../assets/iPhone.jpg";
export default function AdminProduct({ nome, peso, preco, descricao }) {
    return (
        <Container>
            <div className="name-description">
                <div className="name">
                    <h3>Nome: </h3>
                    <p>{nome}</p>
                </div>
                <div className="description">
                    <h3>Descrição: </h3>
                    <p>{descricao}</p>
                </div>
            </div>
            <div className="price-weight">
                <div className="price">
                    <h3>Preço: </h3>
                    <p>{preco} R$</p>
                </div>
                <div className="weight">
                    <h3>Peso: </h3>
                    <p>{peso} g</p>
                </div>
            </div>
            <div className="product-buttons">
                <button className="btn">
                    <AiFillEdit />
                </button>
                <button className="btn">
                    <MdDisabledVisible />
                </button>
            </div>
            <img src={productImgMock} />
        </Container>
    );
}
