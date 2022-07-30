import { useEffect, useState } from "react";
import { Container, ProductsWrapper } from "./styles";
import Product from "../product/Product";
import api from "../../services/api";
import AddProduct from "../AddProduct/AddProduct";

export default function Products() {
    const [products, setProducts] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const loadProducts = async () => {
        try {
            await api.get("/products").then(({ data }) => {
                setProducts(data.products);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!products) loadProducts();
    }, [products]);

    const addProduct = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        loadProducts();
        //reload products
    };

    return (
        <>
            <AddProduct handleCloseModal={handleCloseModal} modalOpen={modalOpen} />

            <Container>
                <button className="btn" onClick={addProduct}>
                    +
                </button>
                <ProductsWrapper>
                    {products &&
                        products.map(
                            (prod) =>
                                prod.ativo && (
                                    <Product
                                        key={prod._id}
                                        nome={prod.nome}
                                        peso={`${prod.peso}`}
                                        preco={`${prod.preco}`}
                                        descricao={prod.descricao}
                                    />
                                )
                        )}
                </ProductsWrapper>
            </Container>
        </>
    );
}
