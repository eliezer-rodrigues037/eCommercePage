import { useState } from "react";
import { modalStyle, Container, Description } from "./styles";
import api from "../../services/api";
import ReactModal from "react-modal";

export default function AddProduct({ handleCloseModal, modalOpen }) {
    const [product, setProduct] = useState({
        nome: "",
        descricao: "",
        preco: "",
        peso: "",
        img: undefined,
    });
    const [error, setError] = useState();

    const handleSubmit = async () => {
        try {
            if (product.nome === "" || product.descricao === "" || product.preco === "" || product.peso === "") {
                setError("Preencha todos os campos!");
            } else {
                await api.post("/products", product);
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
                <input type="text" onChange={(e) => setProduct({ ...product, nome: e.target.value })} />
                <label>Descrição</label>
                <Description maxLength="250" type="text" onChange={(e) => setProduct({ ...product, descricao: e.target.value })} />
                <div className="numberInputs">
                    <label>Preço</label>
                    <input type="number" onChange={(e) => setProduct({ ...product, preco: e.target.value })} />
                    <label>Peso</label>
                    <input type="number" onChange={(e) => setProduct({ ...product, peso: e.target.value })} />
                </div>
                <div>
                    <label>Upload Image</label>
                    <input type="file" value="" onChange={(e) => setProduct({ ...product, img: e.target.value })} />
                </div>
                {error && <p>{error}</p>}
                <button type="button" className="btn" onClick={handleSubmit}>
                    Adicionar
                </button>
            </Container>
        </ReactModal>
    );
}
