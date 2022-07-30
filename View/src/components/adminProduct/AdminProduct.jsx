import { useState } from "react";
import { Container } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { MdDisabledVisible } from "react-icons/md";

import productImgMock from "../../assets/iPhone.jpg";
import EditProduct from "../editProduct/EditProduct";
export default function AdminProduct({ productId, nome, peso, preco, descricao, loadProducts }) {
    const [modalOpen, setModalOpen] = useState(false);

    const editProduct = () => {
        setModalOpen(true);
    };

    const HandleCloseModal = () => {
        setModalOpen(false);
        loadProducts();
    };

    return (
        <>
            <EditProduct
                handleCloseModal={HandleCloseModal}
                modalOpen={modalOpen}
                productId={productId}
                nome={nome}
                peso={peso}
                preco={preco}
                descricao={descricao}
            />
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
                    <button className="btn" onClick={editProduct}>
                        <AiFillEdit />
                    </button>
                    <button className="btn">
                        <MdDisabledVisible />
                    </button>
                </div>
                <img src={productImgMock} />
            </Container>
        </>
    );
}
