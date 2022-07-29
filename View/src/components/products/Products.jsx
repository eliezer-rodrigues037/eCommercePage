import { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container } from "./styles";
import api from "../../services/api";

export default function Products() {
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
        if (products) console.log(`${products[0].preco}`);
    }, [products]);
    return (
        <Container>
            {products &&
                products.map((prod) => (
                    <Product key={prod._id} nome={prod.nome} peso={`${prod.peso}`} preco={`${prod.preco}`} descricao={prod.descricao} />
                ))}
        </Container>
    );
}
