import { useState, useEffect } from "react";
import { Container } from "./styles";
import { BsSearch } from "react-icons/bs";
import api from "../../services/api";
import AdminProduct from "../adminProduct/AdminProduct";

export default function AdminProducts() {
    const [products, setProducts] = useState();
    const [search, setSearch] = useState();
    const [err, setErr] = useState();

    const loadProducts = async () => {
        try {
            console.log("loading products...");
            await api.get("/products").then(({ data }) => {
                setProducts(data.products);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        if (search === "") {
            loadProducts();
            setErr(undefined);
        }

        const searchedProduct = products.find(
            (product) => product.nome.toLowerCase().replace(/\s+/g, "") === search.toLowerCase().replace(/\s+/g, "")
        );

        if (searchedProduct) {
            setProducts([searchedProduct]);
            setErr(null);
        } else if (!searchedProduct && search != "") {
            setErr(`Sua pesquisa - ${search} - não encontrou nenhum produto correspondente`);
        }
    };

    useEffect(() => {
        if (!products) loadProducts();
    }, [products]);

    return (
        <Container>
            <div className="search">
                {err && <p className="err">{err}</p>}
                <input placeholder="Buscar" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn" onClick={handleSearch}>
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
                        ativo={prod.ativo}
                        img={prod.img}
                    />
                ))}
        </Container>
    );
}
