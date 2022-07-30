import { useState } from "react";
import ReactModal from "react-modal";
import { Container, modalStyle, Description } from "./styles";
import api from "../../services/api";

export default function EditProduct({ handleCloseModal, modalOpen, productId, nome, peso, preco, descricao }) {
    const [product, setProduct] = useState({
        nome: nome,
        descricao: descricao,
        preco: preco,
        peso: peso,
    });
    const [error, setError] = useState();

    const handleSubmit = async () => {
        try {
            if (product.nome === "" || product.descricao === "" || product.preco === "" || product.peso === "") {
                setError("Preencha todos os campos!");
            } else {
                await api.put(`/products/${productId}`, product);
                handleCloseModal();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ReactModal isOpen={modalOpen} onRequestClose={handleCloseModal} style={modalStyle}>
            <Container>
                <label>Nome</label>
                <input type="text" value={product.nome} onChange={(e) => setProduct({ ...product, nome: e.target.value })} />
                <label>Descrição</label>
                <Description
                    value={product.descricao}
                    maxLength="250"
                    type="text"
                    onChange={(e) => setProduct({ ...product, descricao: e.target.value })}
                />
                <div className="numberInputs">
                    <label>Preço</label>
                    <input type="number" value={product.preco} onChange={(e) => setProduct({ ...product, preco: e.target.value })} />
                    <label>Peso</label>
                    <input type="number" value={product.peso} onChange={(e) => setProduct({ ...product, peso: e.target.value })} />
                </div>
                {error && <p>{error}</p>}
                <button type="button" className="btn" onClick={handleSubmit}>
                    Editar
                </button>
            </Container>
        </ReactModal>
    );
}
