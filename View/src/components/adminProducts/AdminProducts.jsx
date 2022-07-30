import { useState, useEffect } from "react";
import { Container } from "./styles";
import { BsSearch } from "react-icons/bs";
import api from "../../services/api";
import AdminProduct from "../adminProduct/AdminProduct";

export default function AdminProducts() {
    const [products, setProducts] = useState();

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

    return (
        <Container>
            <div className="search">
                <input placeholder="Buscar" />
                <button className="btn">
                    <BsSearch />
                </button>
            </div>
            {products &&
                products.map((prod, index) => (
                    <AdminProduct
                        key={index}
                        productId={prod._id}
                        nome={prod.nome}
                        peso={`${prod.peso}`}
                        preco={`${prod.preco}`}
                        descricao={prod.descricao}
                        loadProducts={loadProducts}
                    />
                ))}
        </Container>
    );
}
